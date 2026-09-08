import type { QuestionType } from './question';

export type CreateQuestionData = {
  id: string;
  text: string;
  type: QuestionType;
  options: string[];
  correctAnswer: unknown;
};

export type CreateQuizData = {
  title: string;
  questions: CreateQuestionData[];
};
