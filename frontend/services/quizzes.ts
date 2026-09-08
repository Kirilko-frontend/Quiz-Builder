import { api } from "./api";

import type { Quiz } from "@models/quiz";
import type { QuizListItem } from "@models/quizListItem";
import { CreateQuizData } from "@models/createQuizData";

export function createQuiz(data: CreateQuizData) {
  return api<Quiz>("/quizzes", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getQuizzes() {
  return api<QuizListItem[]>("/quizzes");
}

export function getQuiz(id: string) {
  return api<Quiz>(`/quizzes/${id}`);
}

export function deleteQuiz(id: string) {
  return api<{ message: string }>(`/quizzes/${id}`, {
    method: "DELETE",
  });
}
