import Navbar from "../Shared/Navbar"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import SingleArticleCard from "./SingleArticleCard"

const SingleArticle = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <main>
                <SingleArticleCard/>
            </main>
            <Footer/>
        </>
    )
}

export default SingleArticle