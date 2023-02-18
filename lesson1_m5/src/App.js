import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main_Page from "./pages/mainPage/Main_Page";
import AboutPage from "./pages/aboutPage/AboutPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Layout from "./components/hoc/Layout";

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Layout/>}/>
              <Route path="/" element={<Main_Page/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/third" element={<ThirdPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
      </Routes>



    </BrowserRouter>
  )
}

export default App;
