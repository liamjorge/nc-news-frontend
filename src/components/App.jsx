import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home/Home"
import Topic from "./Topic/Topic"
import SingleArticle from "./SingleArticle/SingleArticle"
import ErrorPage from "./Shared/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topic" element={<Topic />} />
          <Route path="/articles/:articleId" element={<SingleArticle />} />
          <Route path="/error" element={<ErrorPage />} /> 
          <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
