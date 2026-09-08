export declare const QuestionType: {
    readonly BOOLEAN: "BOOLEAN";
    readonly INPUT: "INPUT";
    readonly CHECKBOX: "CHECKBOX";
};
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
