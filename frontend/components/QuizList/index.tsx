import type { QuizListItem } from "@models/quizListItem";

import styles from "./styles.module.scss";

type IProps = {
  quizzes: QuizListItem[];
};

export default function QuizList({ quizzes }: IProps) {
  return (
    <div className={styles["quiz-list"]}>
      {quizzes.map((quiz) => (
        <div className={styles["quiz-list__item"]} key={quiz.id}>
          <h2 className={styles["quiz-list__title"]}>{quiz.title}</h2>

          <p className={styles["quiz-list__count"]}>
            Questions: {quiz._count.questions}
          </p>
        </div>
      ))}
    </div>
  );
}
