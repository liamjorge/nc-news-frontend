import Navbar from "../Shared/Navbar"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Filter from "./Filter"
import ArticleGrid from "./ArticleGrid/ArticleGrid"
import { useState } from "react"

const Home = () => {
    const [topic, setTopic] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    return (
        <> 
            <Navbar/>
            <Header/>
            <main>
                <Filter topic={topic} setTopic={setTopic} sortBy={sortBy} setSortBy={setSortBy}/>
                <ArticleGrid topic={topic} sortBy={sortBy}/>
            </main>
            <Footer/>
        </>
    )
}

export default Home