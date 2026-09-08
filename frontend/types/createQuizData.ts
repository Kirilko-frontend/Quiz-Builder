export type CreateQuizData = {
  title: string;
  questions: {
    id:string;
    text: string;
    type: 'BOOLEAN' | 'INPUT' | 'CHECKBOX';
    options: string[];
    correctAnswer: unknown;
  }[];
}; 