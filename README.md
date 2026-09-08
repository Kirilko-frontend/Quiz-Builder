# Quiz Builder

A full-stack quiz builder application built with React, Next.js, NestJS, TypeScript, Prisma and PostgreSQL.

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* SCSS Modules
* Zod
* ESLint
* Prettier

### Backend

* NestJS
* TypeScript
* Prisma
* PostgreSQL
* ESLint

## Project Structure

```text
Quiz-Builder/
├── backend/
│   ├── prisma/
│   └── src/
└── frontend/
    ├── app/
    ├── components/
    ├── types/
    ├── services/
    └── styles/
```

## Requirements

* Node.js 20+
* PostgreSQL
* npm

## Environment Variables

### Backend

Create `backend/.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/quiz"
PORT=3001
```

Replace `USER`, `PASSWORD` and the database name with your PostgreSQL configuration.

### Frontend

Create `frontend/.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Environment files are not committed to the repository.

## Database Setup

Create a PostgreSQL database and configure `DATABASE_URL` in `backend/.env`.

Then run:

```bash
cd backend
npm install
npx prisma migrate dev
```

Generate the Prisma client if needed:

```bash
npx prisma generate
```

## Start Backend

From the `backend` directory:

```bash
npm run start:dev
```

The backend will be available at:

```text
http://localhost:3001
```

## Start Frontend

From the `frontend` directory:

```bash
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Available Pages

* `/` — home page
* `/create` — create a new quiz
* `/quizzes` — list all quizzes
* `/quizzes/:id` — quiz details

## API

### Create quiz

```http
POST /quizzes
```

### Get all quizzes

```http
GET /quizzes
```

### Get quiz by ID

```http
GET /quizzes/:id
```

### Delete quiz

```http
DELETE /quizzes/:id
```

## Creating a Sample Quiz

1. Start the backend and frontend.
2. Open `http://localhost:3000/create`.
3. Enter a quiz title.
4. Add one or more questions.
5. Select a question type:

   * Boolean — True/False
   * Input — short text answer
   * Checkbox — multiple correct answers
6. Fill in the answers.
7. Click **Create quiz**.
8. Open `/quizzes` to see the created quiz.
9. Open the quiz details to verify the questions and correct answers.

## Code Quality

Format the entire project from the repository root:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Run frontend linting:

```bash
cd frontend
npm run lint
```

Run backend linting:

```bash
cd backend
npm run lint
```

## Build

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
cd backend
npm run build
```

## Features

* Create quizzes
* Add and remove questions dynamically
* Boolean questions
* Short text input questions
* Multiple-choice questions with multiple correct answers
* View all created quizzes
* View quiz details
* Delete quizzes
* PostgreSQL persistence
* Responsive UI
