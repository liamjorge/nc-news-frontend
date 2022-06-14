import styles from "./ArticleCard.module.css"
import { timeSince, postedThisYear } from "../../../../utils/datetime"
import { formatTopic } from "../../../../utils/formatters"
import { useState } from "react";
import ArticleDetails from "./ArticleDetails";

const ArticleCard = (props) => {
    const {articleInfo} = props;
    const [viewArticleDetails, setViewArticleDetails] = useState(false)

    return (
        <>
            <article className={styles['article-card']} onClick={() => setViewArticleDetails(viewArticleDetails => !viewArticleDetails) }>
                <img className={styles['article-card__logo']} src="https://picsum.photos/200/300" alt={`${articleInfo.author} logo`}/>
                <p className={styles['article-card__author']}>{articleInfo.author}</p>
                <h3 className={styles['article-card__title']}>{articleInfo.title}</h3>
                <p className={styles['article-card__topic']}>{formatTopic(articleInfo.topic)}</p>
                <div className={styles['article-card__votes']}>
                    <p className={styles['article-card__stats']}>👍 {articleInfo.votes} votes</p>
                    <p className={styles['article-card__stats']}>💬 {articleInfo.comment_count} comments</p>
                </div>
                <p className={styles['article-card__posted-on']}>{timeSince(articleInfo.created_at)}</p>
                <div className={styles['article-card__emoji']}>
                    { postedThisYear(articleInfo.created_at)
                        ? <img src={require('../../../../assets/gifs/new2.gif')}  height="20px" alt="New"/>
                        : null
                    }
                </div>
            </article>
            {viewArticleDetails ? <ArticleDetails articleInfo={articleInfo} />: null}
        </>
        
    )
}

export default ArticleCard