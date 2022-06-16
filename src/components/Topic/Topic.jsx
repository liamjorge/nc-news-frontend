import Filter from "../Home/Filter"
import ArticleGrid from "../Home/ArticleGrid/ArticleGrid"
import { useParams } from "react-router-dom"

const Topic = () => {
    const { topic } = useParams()
    return (
        <main>
            <h2>All {topic} articles</h2>
            <Filter />
            <ArticleGrid topic={topic}/>
        </main>
    )
}

export default Topic