export interface IClassCard {
    title: string;
    subtitle: string;
    teacher?: string;
    icon?: string;
}

export const ExampleClass: IClassCard = {
    title: "Question Set 1",
    subtitle: "Bronx Science Krillion",
    teacher: "Rayhan Alwi",
}