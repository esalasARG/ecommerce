import './navbar.css';
import CardWidget from '../CardWidget';
import Logo from '../img/logo.jpeg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container className='navBar'>
                <Navbar.Brand className="logoFont" href="#home">
                    <img
                    alt="logo"
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Margot
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio" >Inicio</Nav.Link>
                    <Nav.Link href="#catalogo">Catalogo</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CardWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar;