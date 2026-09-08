import { useState, type FormEvent } from "react";

import type { CreateQuizData } from "@models/createQuizData";

import QuestionEditor from "./components/QuestionEditor";
import { createQuizSchema } from "schemas/quiz";

import styles from "./styles.module.scss";

type IProps = {
  onSubmit: (data: CreateQuizData) => void;
};

export default function QuizForm({ onSubmit }: IProps) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<CreateQuizData["questions"]>([]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        type: "INPUT",
        options: [],
        correctAnswer: "",
      },
    ]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data: CreateQuizData = {
      title,
      questions,
    };

    const result = createQuizSchema.safeParse(data);

    if (!result.success) {
      console.log(result.error);
      return;
    }

    console.log(result.data);

    await onSubmit(result.data);

    setTitle("");
    setQuestions([]);
  };

  return (
    <form className={styles["quiz-form"]} onSubmit={handleSubmit}>
      <label htmlFor="title" className={styles["quiz-form__title"]}>
        Quiz title
      </label>

      <input
        className={styles["quiz-form__input"]}
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      {questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onChange={(updatedQuestion) => {
            setQuestions((prev) =>
              prev.map((item) =>
                item.id === updatedQuestion.id ? updatedQuestion : item,
              ),
            );
          }}
          onRemove={() => {
            setQuestions((prev) =>
              prev.filter((item) => item.id !== question.id),
            );
          }}
        />
      ))}

      <div className={styles["quiz-form__actions"]}>
        <button
          className={styles["quiz-form__button"]}
          type="button"
          onClick={addQuestion}
        >
          Add question
        </button>
        <button className={styles["quiz-form__button"]} type="submit">
          Create quiz
        </button>
      </div>
    </form>
  );
}
