'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getQuiz } from '@services/quizzes';

import type { Quiz } from '@models/quiz';

import styles from './styles.module.scss';

export default function QuizDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    getQuiz(id).then(setQuiz);
  }, [id]);

  if (!quiz) {
    return <main className={styles['quiz-details']}>Loading...</main>;
  }

  return (
    <main className={styles['quiz-details']}>
      <h1 className={styles['quiz-details__title']}>{quiz.title}</h1>

      <div className={styles['quiz-details__questions']}>
        {quiz.questions.map((question, index) => (
          <section
            className={styles['quiz-details__question']}
            key={question.id}
          >
            <h2 className={styles['quiz-details__question-title']}>
              {index + 1}. {question.text}
            </h2>

            <p className={styles['quiz-details__type']}>
              Type: {question.type}
            </p>

            {question.type === 'BOOLEAN' && (
              <div className={styles['quiz-details__answers']}>
                <p>
                  Correct answer: {question.correctAnswer ? 'True' : 'False'}
                </p>
              </div>
            )}

            {question.type === 'INPUT' && (
              <div className={styles['quiz-details__answers']}>
                <p>Correct answer: {String(question.correctAnswer)}</p>
              </div>
            )}

            {question.type === 'CHECKBOX' && (
              <div className={styles['quiz-details__answers']}>
                <p>Options:</p>

                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      {option}

                      {Array.isArray(question.correctAnswer) &&
                        question.correctAnswer.includes(optionIndex) && (
                          <strong> — correct</strong>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
