export interface QuestionSet {
    id: number;
    name: string;
    questions: Question[];
}

export type Rarity = "krillion" | "deepcut" | "rare" | "schooler" | "surface"

export interface Question {
    prompt: string;
    answers: Map<string, Answer>;
}

export interface Answer {
    raw: string;
    rarity: Rarity
    /** Equivalent answers */
    aliases: Set<string>; 
    /** Answers that will not fuzzy to the raw answer */
    antiAliases: Set<string>; 
}

export interface SubmissionOut {
    status: "ok" | "bad" | "hold"
    message?: string;
    caption?: string;

    /** Fuzzy score (debug), if fuzzied to answer */
    score?: number;
}

export type GameState = "answering" | "waiting" | "done" | "start"

