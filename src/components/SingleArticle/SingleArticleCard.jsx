import { useParams } from "react-router-dom"
import { useArticleDetails} from "../../hooks/useArticleDetails"
import ArticleCard from "../Home/ArticleGrid/ArticleCard/ArticleCard"
import LoadingSpinner from "../Shared/LoadingSpinner"
import { Navigate } from "react-router-dom"

const SingleArticleCard = () => {
    const { articleId } = useParams()
    const {articleDetails, isLoading, errorMessage } = useArticleDetails(articleId)

    return (
        <section>
            {errorMessage && <Navigate to="/error" state={errorMessage} />}
            {isLoading && !errorMessage
                ? <LoadingSpinner />
                : <ArticleCard articleInfo={articleDetails} expanded={true} key={articleId}/>
            }
        </section>
    )
}

export default SingleArticleCard