import Link from 'next/link';

import type { QuizListItem } from '@models/quizListItem';

import styles from './styles.module.scss';

type IProps = {
  quizzes: QuizListItem[];
  onDelete: (id: string) => void;
};

export default function QuizList({ quizzes, onDelete }: IProps) {
  return (
    <div className={styles['quiz-list']}>
      {quizzes.map((quiz) => (
        <div className={styles['quiz-list__item']} key={quiz.id}>
          <Link
            className={styles['quiz-list__link']}
            href={`/quizzes/${quiz.id}`}
          >
            <h2 className={styles['quiz-list__title']}>{quiz.title}</h2>

            <p className={styles['quiz-list__count']}>
              Questions: {quiz._count.questions}
            </p>
          </Link>

          <button
            className={styles['quiz-list__delete']}
            type="button"
            onClick={() => onDelete(quiz.id)}
            aria-label={`Delete ${quiz.title}`}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
