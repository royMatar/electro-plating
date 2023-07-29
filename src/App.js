import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import Footer from "./Components/Components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import IndustriesPage from "./Components/Pages/IndustriesPage";
import ServicesPage from "./Components/Pages/ServicesPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
