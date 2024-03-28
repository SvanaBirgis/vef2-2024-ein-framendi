import styles from "./page.module.css";
import React from "react";
import ArticleCard from "@/components/articleCard/articleCard";

async function getAllArticles() {
    try {
        const res = await fetch(`${process.env.API_URL}/news`, {cache: "no-store"});
        let news = await res.json();
        news = news.sort((a, b) => new Date(b.inserted) - new Date(a.inserted));
        return news;
    } catch (error) {
        console.error("Failed to fetch news", error);
        return [];
    }
}

export default async function NewsPage() {
    const news = await getAllArticles();
    return(
        <div className={styles.container}>
            <h1 className={styles.title}> Allar fréttir </h1>
            <div className={styles.newsContainer}>
                {news?.length > 0 && news.map((news) => (
                    <ArticleCard news = {news} 
                    key={news.id}
                    />
                ))}
            </div>         
        </div>
    )
}