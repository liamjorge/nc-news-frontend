import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header/Header"
import Home from "./Home/Home"
import Topics from "./Topics/Topics"
import Login from "./Login/Login"
import Footer from "./Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
