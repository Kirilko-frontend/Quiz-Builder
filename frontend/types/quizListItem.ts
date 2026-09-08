export type QuizListItem = {
  id: string;
  title: string;
  createdAt: string;
  _count: {
    questions: number;
  };
};
