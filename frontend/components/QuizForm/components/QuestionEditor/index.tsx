import type { CreateQuizData } from "@models/createQuizData";
import type { QuestionType } from "@models/question";

import styles from "./styles.module.scss";

type QuestionData = CreateQuizData["questions"][number];

type IProps = {
  question: QuestionData;
  onChange: (question: QuestionData) => void;
  onRemove: () => void;
};

export default function QuestionEditor({
  question,
  onChange,
  onRemove,
}: IProps) {
  const handleTextChange = (value: string) => {
    onChange({
      ...question,
      text: value,
    });
  };

  const handleTypeChange = (type: QuestionType) => {
    let options: string[] = [];
    let correctAnswer: unknown = "";

    if (type === "BOOLEAN") {
      options = ["True", "False"];
      correctAnswer = true;
    }

    if (type === "CHECKBOX") {
      options = ["", ""];
      correctAnswer = [];
    }

    onChange({
      ...question,
      type,
      options,
      correctAnswer,
    });
  };

  const handleBooleanChange = (value: boolean) => {
    onChange({
      ...question,
      correctAnswer: value,
    });
  };

  const handleInputChange = (value: string) => {
    onChange({
      ...question,
      correctAnswer: value,
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const options = [...question.options];

    options[index] = value;

    onChange({
      ...question,
      options,
    });
  };

  const handleCheckboxChange = (index: number) => {
    const correctAnswers = Array.isArray(question.correctAnswer)
      ? [...question.correctAnswer]
      : [];

    if (correctAnswers.includes(index)) {
      correctAnswers.splice(correctAnswers.indexOf(index), 1);
    } else {
      correctAnswers.push(index);
    }

    onChange({
      ...question,
      correctAnswer: correctAnswers,
    });
  };

  return (
    <div className={styles["question-editor"]}>
      <div className={styles["question-editor__header"]}>
        <span className={styles["question-editor__number"]}>Question</span>

        <button
          className={styles["question-editor__remove"]}
          type="button"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>

      <label className={styles["question-editor__label"]}>
        Question
        <input
          className={styles["question-editor__input"]}
          type="text"
          value={question.text}
          onChange={(event) => handleTextChange(event.target.value)}
        />
      </label>

      <label className={styles["question-editor__label"]}>
        Type
        <select
          className={styles["question-editor__select"]}
          value={question.type}
          onChange={(event) =>
            handleTypeChange(event.target.value as QuestionType)
          }
        >
          <option value="BOOLEAN">Boolean</option>
          <option value="INPUT">Input</option>
          <option value="CHECKBOX">Checkbox</option>
        </select>
      </label>

      {question.type === "BOOLEAN" && (
        <div className={styles["question-editor__answers"]}>
          <label className={styles["question-editor__option"]}>
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={question.correctAnswer === true}
              onChange={() => handleBooleanChange(true)}
            />
            True
          </label>

          <label className={styles["question-editor__option"]}>
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={question.correctAnswer === false}
              onChange={() => handleBooleanChange(false)}
            />
            False
          </label>
        </div>
      )}

      {question.type === "INPUT" && (
        <label className={styles["question-editor__label"]}>
          Correct answer
          <input
            className={styles["question-editor__input"]}
            type="text"
            value={
              typeof question.correctAnswer === "string"
                ? question.correctAnswer
                : ""
            }
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </label>
      )}

      {question.type === "CHECKBOX" && (
        <div className={styles["question-editor__answers"]}>
          {question.options.map((option, index) => (
            <div className={styles["question-editor__checkbox"]} key={index}>
              <input
                type="checkbox"
                checked={
                  Array.isArray(question.correctAnswer) &&
                  question.correctAnswer.includes(index)
                }
                onChange={() => handleCheckboxChange(index)}
              />

              <input
                className={styles["question-editor__input"]}
                type="text"
                value={option}
                placeholder={`Option ${index + 1}`}
                onChange={(event) =>
                  handleOptionChange(index, event.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
