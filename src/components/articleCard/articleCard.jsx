import React from "react";
import styles from "./articleCard.module.css";
import Link from "next/link";
import NewsDate from "../newsDate/newsDate";



export default function ArticleCard({ news }) {
  if (!news) {
    return null;
  }

  return (
    <div className={styles.container} key={news.id}>
      <div className={styles.article}>
        <Link href={`/news/${news.id}`}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              {news.title}
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              {news.content.length > 300 ? news.content.substring(0, 300) + "..." : news.content}
            </div>
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.date}>
              <NewsDate date={new Date(news.inserted)} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}