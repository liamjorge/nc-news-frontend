import styles from "./ArticleDetails.module.css";
import { useArticleDetails} from "../../../../hooks/useArticleDetails"
import LoadingSpinner from "../../../Shared/LoadingSpinner"
import { Link } from "react-router-dom";


const ArticleDetails = (props) => {
    const {articleId, expanded, handleOnClick} = props;
    const {articleDetails, isLoading, errorMessage } = useArticleDetails(articleId)

    return (
        <div className={`${styles['article-details']} ${!expanded ? 'clickable' : ''}`} onClick={() => expanded ? null : handleOnClick()}>
            {errorMessage && <p><i className="bi bi-exclamation-triangle icon"></i> {errorMessage}</p>}
            {isLoading
                ? <LoadingSpinner />
                : <><div className={styles['details-container']}>
                        <div className={styles['article-body']}><p>{articleDetails.body}</p></div>
                        <div className={styles['article-info']}>
                            <Link to="/">See more posts from {articleDetails.author}</Link>
                        </div>
                    </div>
                    <div className={styles['article-cta']}>
                        <Link to={`/articles/${articleId}`}>
                            <button type="button">
                                View article page
                            </button>
                        </Link>
                        <p className={styles['article-cta__text']}>👉 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cu so!</p>
                    </div>
                </>
            }
        </div>
    )
}

export default ArticleDetails;