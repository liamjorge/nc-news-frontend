import styles from "./ArticleDetails.module.css";
import { useArticleDetails} from "../../../../hooks/useArticleDetails"
import LoadingSpinner from "../../../Shared/LoadingSpinner"

const ArticleDetails = (props) => {
    const {articleId, expanded, handleOnClick} = props;
    const {articleDetails, isLoading, errorMessage } = useArticleDetails(articleId)

    return (
        <div className={`${styles['article-details']} ${!expanded ? 'clickable' : ''}`} onClick={() => expanded ? null : handleOnClick()}>
            {errorMessage && <p><i className="bi bi-exclamation-triangle icon"></i> {errorMessage}</p>}
            {isLoading
                ? <LoadingSpinner />
                : <p>{articleDetails.body}</p>
            }
        </div>
    )
}

export default ArticleDetails;