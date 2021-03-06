import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../Login/CustomLink/CustomLink';

const Header = () => {

    const [user,] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Nabil Production</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/packages">Packages</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About Me</Nav.Link>
                            <Nav.Link as={CustomLink} to="/checkout">CheckOut</Nav.Link>
                            {user ? <Nav.Link onClick={handleSignOut}>SignOut</Nav.Link>
                                : <Nav.Link as={CustomLink} to="/login">LogIn</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;