import { z } from 'zod';

const questionSchema = z.object({
  id: z.string().uuid(),
  text: z.string().min(1, 'Question is required'),
  type: z.enum(['BOOLEAN', 'INPUT', 'CHECKBOX']),
  options: z.array(z.string()),
  correctAnswer: z.unknown(),
});

export const createQuizSchema = z.object({
  title: z.string().min(1, 'Quiz title is required'),
  questions: z
    .array(questionSchema)
    .min(1, 'Add at least one question'),
});