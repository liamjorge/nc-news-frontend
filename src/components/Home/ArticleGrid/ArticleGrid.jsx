import ArticleCard from "./ArticleCard/ArticleCard"
import ErrorComponent from "../../Shared/ErrorComponent"
import { useArticles } from "../../../hooks/useArticles"
import LoadingSpinner from "../../Shared/LoadingSpinner"
import { Navigate, useLocation } from "react-router-dom"

const ArticleGrid = (props) => {
    const { topic, sortBy  } = props;
    const {articles, isLoading, errorMessage } = useArticles(topic, sortBy)
    const location = useLocation();

    return (
        <section>
            {errorMessage && location.pathname.includes("topics")
                ? <Navigate to="/error" state={errorMessage} />
                : errorMessage && <ErrorComponent errorMessage={errorMessage} />}
            {isLoading
                ? <LoadingSpinner />
                : articles.map(article => <ArticleCard articleInfo={article} expanded={false} key={article.article_id} />)
            }
        </section>
    )
}

export default ArticleGrid