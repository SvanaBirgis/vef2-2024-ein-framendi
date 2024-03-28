import React from "react";
import styles from "./article.module.css";

export default function Article({article}) {
  if (!article) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            {article.title}
          </div>
        </div>
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            {article.inserted}
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
}