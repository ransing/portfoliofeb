import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Viraj",
      headerLinks: [
        {title: "Home", path: '/'},
        {title: "About", path: '/about'},
        {title: "Contact", path: '/contact'},
        {title: "Home4", path: '/'},
      ],
      home: {
        title: "do not stop, ever",
        subTitle: "keep on moving",
        text: "blah"
      },
      about: {
        title: "about me "
      },
      contact: {
        title: "Contact me"
      }
    }

  }

  render() {
    return (


      <Router> 
        <Container className="p-0" fluid={true}>

            <Navbar className= "border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand> Viraj </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>  
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto" >
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>

            <div className="App">
            </div>
        </Container>
        Hello Portfolio
      </Router>
      
    );
  }
}

export default App;


