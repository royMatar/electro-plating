import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
    <Navigation/>
      <HomePage/>
    </>
      
  );
}

export default App;
