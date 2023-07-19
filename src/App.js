import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from './Components/Homepage/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navigation/>
      <HomePage/>
      <Footer/>
    </>
      
  );
}

export default App;
