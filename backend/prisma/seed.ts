import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, QuestionType } from '../src/generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const quiz = await prisma.quiz.create({
data: {
  title: 'JavaScript Basics',
  questions: {
    create: [
      {
        id: crypto.randomUUID(),
        text: 'Is JavaScript a programming language?',
        type: QuestionType.BOOLEAN,
        options: ['True', 'False'],
        correctAnswer: true,
      },
      {
        id: crypto.randomUUID(),
        text: 'Is JavaScript case-sensitive?',
        type: QuestionType.BOOLEAN,
        options: ['True', 'False'],
        correctAnswer: true,
      },
      {
        id: crypto.randomUUID(),
        text: 'What keyword is used to declare a constant in JavaScript?',
        type: QuestionType.INPUT,
        options: [],
        correctAnswer: 'const',
      },
      {
        id: crypto.randomUUID(),
        text: 'Which keyword declares a block-scoped variable?',
        type: QuestionType.INPUT,
        options: [],
        correctAnswer: 'let',
      },
      {
        id: crypto.randomUUID(),
        text: 'Which of the following are JavaScript primitive types?',
        type: QuestionType.CHECKBOX,
        options: ['string', 'number', 'boolean', 'array'],
        correctAnswer: [0, 1, 2],
      },
    ],
  },
},
  });

  console.log(`Created sample quiz: ${quiz.title}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });