import type { Answer, QuestionSet } from "./types";

export const QuestionSet_1: QuestionSet = {
    id: 1,
    name: "Question Set 1",
    questions: [
        {
            prompt: "Name a teacher.",
            answers: new Map(Object.entries({
                ["Mr. Noody"]: {
                    raw: "Mr. Noody",
                    rarity: "rare",
                    aliases: new Set([]),
                    antiAliases: new Set([])
                }
            } as Record<string, Answer>))
        }
    ]
}