import { useParams } from "react-router-dom"
import { useArticleDetails} from "../../hooks/useArticleDetails"
import ArticleCard from "../Home/ArticleGrid/ArticleCard/ArticleCard"
import LoadingSpinner from "../Shared/LoadingSpinner"

const SingleArticle = () => {
    const { articleId } = useParams()
    const {articleDetails, isLoading, errorMessage } = useArticleDetails(articleId)

    return (
        <main>
            <section>
                {errorMessage && <p><i className="bi bi-exclamation-triangle icon"></i> {errorMessage}</p>}
                {isLoading
                    ? <LoadingSpinner />
                    : <ArticleCard articleInfo={articleDetails} expanded={true} key={articleId}/>
                }
            </section>
        </main>
    )
}

export default SingleArticle