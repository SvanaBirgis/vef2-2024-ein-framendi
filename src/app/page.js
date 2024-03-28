import styles from "./page.module.css";
import ArticleCard from "@/components/articleCard/articleCard";
import React from "react";

async function getLatestArticles() {
  try {
    const res = await fetch(`${process.env.API_URL}/news`, {cache: "no-store"});
    let news = await res.json();
    news = news.sort((a, b) => new Date(b.inserted) - new Date(a.inserted));
    const latestArticles = news.slice(0, 10);
    return latestArticles;
  }catch (error) {
    console.error("Failed to fetch news", error);
    return [];
  }
  
}

export default async function Home() {
  const news = await getLatestArticles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Fréttir frá Handboltanum á Íslandi </h1>
      <div className={styles.newsContainer}>
        {news?.length > 0 && news.map((news) => (
            <ArticleCard news = {news} 
            key={news.id}
            />
))}
        </div>          
    </div>
  );
}
