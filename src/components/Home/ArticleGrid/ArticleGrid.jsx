import ArticleCard from "./ArticleCard/ArticleCard"
import { useState, useEffect } from "react"
import fetchArticles from '../../../utils/api'

const ArticleGrid = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        });
        }, []);

    if (isLoading) return <p>Loading...</p>
    return (
        <section>
            {articles.map(article => <ArticleCard articleInfo={article} key={article.article_id}/>)}
        </section>
    )
}

export default ArticleGrid