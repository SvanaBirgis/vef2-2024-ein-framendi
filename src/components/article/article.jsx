import React from "react";
import styles from "./article.module.css";
import NewsDate from "../newsDate/newsDate";

export default function Article({ article }) {
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
                        <NewsDate date={new Date(article.inserted)} />
                    </div>
                </div>
                <div>
                    {article.content.split("\n\n").map((paragraph, index) => (
                        <div key={index}>
                            {paragraph.split("\n").map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}