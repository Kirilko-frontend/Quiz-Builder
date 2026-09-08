'use client';

import { createQuiz } from '@services/quizzes';

import { CreateQuizData } from '@models/createQuizData';

import QuizForm from '@components/QuizForm';

import styls from './styles.module.scss';

export default function CreateQuizPage() {
  const handleCreateQuiz = async (data: CreateQuizData) => {
    try {
      await createQuiz(data);
    } catch (error) {
      console.error('Failed to create quiz:', error);
      alert('Failed to create quiz. Please try again.');

      throw error;
    }
  };

  return (
    <div className={styls['create-quiz-page']}>
      <QuizForm onSubmit={handleCreateQuiz} />
    </div>
  );
}
