import ArticleCard from "./ArticleCard/ArticleCard"
import { useArticles } from "../../../hooks/useArticles"

const ArticleGrid = () => {
    const {articles, isLoading } = useArticles()

    if (isLoading) return <p>Loading...</p>
    return (
        <section>
            {articles.map(article => <ArticleCard articleInfo={article} key={article.article_id}/>)}
        </section>
    )
}

export default ArticleGrid