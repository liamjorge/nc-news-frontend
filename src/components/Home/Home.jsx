import Filter from "./Filter"
import ArticleGrid from "./ArticleGrid/ArticleGrid"

const Home = () => {
    return (
        <main>
            <Filter />
            <ArticleGrid topic="all"/>
        </main>
    )
}

export default Home