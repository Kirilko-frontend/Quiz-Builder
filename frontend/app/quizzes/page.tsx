"use client";

import { useEffect, useState } from "react";

import { deleteQuiz, getQuizzes } from "@services/quizzes";

import type { QuizListItem } from "@models/quizListItem";

import QuizList from "@components/QuizList";

import styles from "./styles.module.scss";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);

  useEffect(() => {
    getQuizzes().then(setQuizzes);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteQuiz(id);

    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
  };

  return (
    <main className={styles["quizzes-page"]}>
      <h1 className={styles["quizzes-page__title"]}>Quizzes</h1>

      <QuizList quizzes={quizzes} onDelete={handleDelete} />
    </main>
  );
}
