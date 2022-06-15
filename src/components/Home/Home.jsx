import Filter from "../Shared/Filter"
import ArticleGrid from "../Shared/ArticleGrid/ArticleGrid"

const Home = () => {
    return (
        <main>
            <Filter />
            <ArticleGrid topic="all"/>
        </main>
    )
}

export default Home