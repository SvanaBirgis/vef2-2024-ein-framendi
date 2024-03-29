import React from "react";
import styles from "./page.module.css";
import ArticleCard from "@/components/articleCard/articleCard";
import Article from "@/components/article/article";

async function getSingleNews(id) {
    try {
        const res = await fetch(`${process.env.API_URL}/news/${id}`, {cache: "no-store"});
        let article = await res.json();
        return article;
    } catch (error) {
        console.error("Failed to fetch news", error);
        return [];
    }
}

export default async function SingleNews({params}){
    const article = await getSingleNews(params.id);
    return(
        <div className={styles.container}>
            <div className={styles.newsContainer}>
                
                    <Article article = {article} 
                    key={article.id}
                    />
            
            </div>         
        </div>
    )
}