import Link from "next/link";

import styles from "./styles.module.scss";

function HomePage() {
  return (
    <main className={styles["home-page"]}>
      <section className={styles["home-page__hero"]}>
        <span className={styles["home-page__badge"]}>Quiz Builder</span>

        <h1 className={styles["home-page__title"]}>
          Create quizzes.
          <br />
          Manage them easily.
        </h1>

        <p className={styles["home-page__description"]}>
          Build custom quizzes with different question types, save them and
          manage your quiz collection in one place.
        </p>

        <div className={styles["home-page__actions"]}>
          <Link className={styles["home-page__button"]} href="/create">
            Create quiz
          </Link>

          <Link
            className={styles["home-page__button-secondary"]}
            href="/quizzes"
          >
            View quizzes
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
