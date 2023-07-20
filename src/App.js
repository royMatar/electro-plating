import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from "./Components/Homepage/HomePage";
import Footer from "./Components/Footer";
import { Routes, Router, Route } from 'react-router-dom';
import ContactPage from "./Components/ContactPage";
import IndustriesPage from "./Components/IndustriesPage";
import ServicePage from "./Components/ServicePage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/industries" element={<IndustriesPage/>} />
        <Route path="/services" element={<ServicePage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
