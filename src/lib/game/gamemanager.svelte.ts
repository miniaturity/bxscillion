import { RARITY_VALUES } from "#lib/data.js";
import { type GameState, type Answer, type Question, type QuestionSet, type SubmissionOut } from "./types";
import Fuse, { type IFuseOptions } from "fuse.js";

export class GameManager {

    public static readonly TIME_S = 25;
    public static readonly SCORE_MULT = 10;

    public score = $state<number>(0);
    public questionSet = $state<QuestionSet>();
    public questionIndex = $state<number>(0);
    public question = $derived<Question | undefined>(this.questionSet?.questions[this.questionIndex]);
    public finalAnswer = $state<Answer>();
    public input = $state<string>("");
    public lastInput = $state<{ answer: string, score: number }>();
    public state = $state<GameState>("start");
    public timer = $state<number>(GameManager.TIME_S);

    
    public static readonly F_THRESHOLD = 0.25;

    constructor(qs: QuestionSet) {
        this.questionSet = qs;
    }


    
    trySubmit(): SubmissionOut {
        if (!this.question) return { status: "bad", message: "Question undefined", caption: "if you aren't debugging, report this, please!" };

        const cleanInput = Helpers.normalize(this.input);
        if (!cleanInput) {
            return { status: "bad", message: "Invalid input"};
        }

        const searchablePool: { text: string, answer: Answer }[] = [];
        const blockedWords = new Set<string>();

        for (const ans of this.question.answers.values()) {
            for (const anti of ans.antiAliases) {
                blockedWords.add(Helpers.normalize(anti));
            }

            searchablePool.push({ text: Helpers.normalize(ans.raw), answer: ans });

            for (const alias of ans.aliases) {
                searchablePool.push({ text: Helpers.normalize(alias), answer: ans });
            }
        }

        if (blockedWords.has(cleanInput))
            return { status: "bad", message: `Invalid answer`, caption: `That isn't in our answer list.`};

        const exactMatch = searchablePool.find((a) => a.text === cleanInput);
        if (exactMatch) {
            let score = 0;
            this.finalAnswer = exactMatch.answer;

            if (this.lastInput?.answer == this.finalAnswer.raw)
                score = this.lastInput.score;
                
            return this.onValidAnswer(score);
        }

        const fuse = new Fuse(searchablePool, {
            keys: ['text'],
            threshold: GameManager.F_THRESHOLD,
            includeScore: true,
            ignoreLocation: true,
        });

        const results = fuse.search(cleanInput);

        if (results.length > 0) {
            if (!results[0].score) {
                return {
                    status: "bad",
                    message: "Autocorrect fuzzy score non-existant."
                }
            }
            
            const old = this.input;
            this.input = results[0].item.answer.raw;
            this.lastInput = { answer: this.input, score: results[0].score };

            return {
                status: "ok",
                message: `Changed (${old}) to (${this.input})`,
                caption: `submit again to confirm, or try a different answer.`,
                score: results[0].score
            }
        }

        return { status: "ok" };
    }

    private onValidAnswer(score: number = 0): SubmissionOut {
        if (!this.finalAnswer) 
            return { status: "bad", message: "Final answer doesn't exist." };

        if (!this.question || !this.questionSet)
            return { status: "bad", message: "Question does not exist." };

        this.score += RARITY_VALUES[this.finalAnswer.rarity];

        if (this.questionIndex + 1 >= this.questionSet.questions.length) {
            this.state = "done";
        } else {
            this.state = "waiting";
            this.questionIndex += 1;
            this.input = "";
        }

        return {
            status: "ok",
            score
        }
    }
    
    
}

export class Helpers {
    public static normalize(text: string): string {
        return text
            .toLowerCase()
            .trim()
            .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '')
            .replace(/\s+/g, ' ');
    }
}
