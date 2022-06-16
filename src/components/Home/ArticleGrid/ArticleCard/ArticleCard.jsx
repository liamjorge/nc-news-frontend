import styles from "./ArticleCard.module.css"
import { timeSince, withinLast48Hrs } from "../../../../utils/datetime"
import { useState } from "react";
import ArticleDetails from "./ArticleDetails";

const ArticleCard = (props) => {
    const {articleInfo, expanded} = props;
    const [viewArticleDetails, setViewArticleDetails] = useState(expanded)
    const handleOnClick = () => {setViewArticleDetails(viewArticleDetails => !viewArticleDetails)}

    return (
        <>
            <article className={`${styles['article-card']} ${viewArticleDetails ? styles['article-card--expanded'] : ''} ${!expanded ? 'clickable' : ''}`} onClick={() => expanded ? null : handleOnClick()}>
                <img className={styles['article-card__logo']} src="https://picsum.photos/200/300" alt={`${articleInfo.author} logo`}/>
                <p className={styles['article-card__author']}>{articleInfo.author}</p>
                <h3 className={styles['article-card__title']}>{articleInfo.title}</h3>
                <p className={styles['article-card__topic']}>{articleInfo.topic}</p>
                <div className={styles['article-card__votes']}>
                    <p className={styles['article-card__stats']}>
                        <i className="bi bi-arrow-up-circle icon"></i>
                        {articleInfo.votes} votes
                    </p>
                    <p className={styles['article-card__stats']}>
                        <i className="bi bi-chat-left-dots icon"></i>
                        {articleInfo.comment_count} comments</p>
                </div>
                <p className={styles['article-card__posted-on']}>{timeSince(articleInfo.created_at)}</p>
                <div className={styles['article-card__emoji']}>
                    { withinLast48Hrs(articleInfo.created_at)
                        ? <img src={require('../../../../assets/gifs/new2.gif')}  height="20px" alt="New"/>
                        : null
                    }
                </div>
            </article>
            {viewArticleDetails ? <ArticleDetails articleId={articleInfo.article_id} expanded={expanded} handleOnClick={handleOnClick}/>: null}
        </>
        
    )
}

export default ArticleCard