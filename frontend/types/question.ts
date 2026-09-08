export type QuestionType = 'BOOLEAN' | 'INPUT' | 'CHECKBOX';

export type Question = {
  id?: string;
  text: string;
  type: QuestionType;
  options: string[];
  correctAnswer: unknown;
};
