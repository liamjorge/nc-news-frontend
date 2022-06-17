import ArticleCard from "./ArticleCard/ArticleCard"
import { useArticles } from "../../../hooks/useArticles"
import LoadingSpinner from "../../Shared/LoadingSpinner"

const ArticleGrid = (props) => {
    const { topic, sortBy  } = props;
    const {articles, isLoading, errorMessage } = useArticles(topic, sortBy)

    return (
        <section>
            {errorMessage && <p><i className="bi bi-exclamation-triangle icon"></i> {errorMessage}</p>}
            {isLoading
                ? <LoadingSpinner />
                : articles.map(article => <ArticleCard articleInfo={article} expanded={false} key={article.article_id} />)
            }
        </section>
    )
}

export default ArticleGrid