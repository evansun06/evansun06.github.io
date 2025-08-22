import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ArtGallery from "./pages/ArtGallery/ArtGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/art" element={<ArtGallery />} />     
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
