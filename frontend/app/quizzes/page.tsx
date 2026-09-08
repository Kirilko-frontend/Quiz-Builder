"use client";

import { useEffect, useState } from "react";

import { getQuizzes } from "@services/quizzes";

import { QuizListItem } from "@models/quizListItem";

import QuizList from "@components/QuizList";

import styles from "./styles.module.scss";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);

  useEffect(() => {
    getQuizzes().then(setQuizzes);
  }, []);

  return (
    <main className={styles["quizzes-page"]}>
      <h1 className={styles["quizzes-page__title"]}>Quizzes</h1>

      <QuizList quizzes={quizzes} />
    </main>
  );
}
