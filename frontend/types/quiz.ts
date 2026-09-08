import { Question } from "./question";

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
  createdAt: string;
  updatedAt: string;
};