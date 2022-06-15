import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header/Header"
import Home from "./Home/Home"
import SingleArticle from "./SingleArticle/SingleArticle"
import Footer from "./Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
