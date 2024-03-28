import React from "react";
import styles from "./page.module.css";
import ArticleCard from "@/components/articleCard/articleCard";

async function getArticlesByLeague(id) {
    try {
        const res = await fetch(`${process.env.API_URL}/news/leagues/${id}`, {cache: "no-store"});
        let news = await res.json();
        news = news.sort((a, b) => new Date(b.inserted) - new Date(a.inserted));
        return news;
    } catch (error) {
        console.error("Failed to fetch news", error);
        return [];
    }
}

async function getLeague(id) {
    try {
        const res = await fetch(`${process.env.API_URL}/leagues/${id}`, {cache: "no-store"});
        let league = await res.json();
        return league;
    } catch (error) {
        console.error("Failed to fetch news", error);
        return [];
    }
}

export default async function LeagueIDPage({params}) {
    const news = await getArticlesByLeague(params.id);
    console.log('news',news);
    const league = await getLeague(params.id);
    console.log('league',league);
    return (
        <div className={styles.container}>
        <h1 className={styles.title}> {league.name} </h1>
        <div className={styles.newsContainer}>
            {news?.length > 0 &&
            news.map((news) => (
                <ArticleCard news={news} key={news.id} />
            ))}
        </div>
        </div>
    );
    }