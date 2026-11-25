import type { Rarity } from "./game/types";

export interface IClassCard {
    id: string;
    title: string;
    subtitle: string;
    teacher?: string;
    icon?: string;
}

export const RARITY_VALUES: Record<Rarity, number> = {
    krillion: 25,
    deepcut: 15,
    rare: 8,
    schooler: 4,
    surface: 2
}

export const ExampleClass: IClassCard = {
    id: "1",
    title: "Question Set 1",
    subtitle: "Bronx Science Krillion",
    teacher: "Rayhan Alwi",
}

