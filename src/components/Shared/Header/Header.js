import React from 'react';
import './Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BiUserCircle } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";



const Header = () => {


  return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className='navbar'>
      <Container>
        <Navbar.Brand href="/home" className='web-name'>FoodMeal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="/home" className='manu'>Home</Nav.Link>
            <Nav.Link href="#about" className='manu mx-3'>About</Nav.Link>
            <NavDropdown title="Food" id="basic-nav-dropdown" >
              <div className='bg-dark'>
                <NavDropdown.Item href="/breakfast" className='text-white dropdown'>Breakfast</NavDropdown.Item>
                <NavDropdown.Item href="/lunch" className='text-white dropdown'>Lunch</NavDropdown.Item>
                <NavDropdown.Item href="/dinner" className='text-white dropdown'>Dinner</NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link href="/meals" className='manu mx-3'>Shop</Nav.Link>
            <Nav.Link href="#blog" className='manu'>Blog</Nav.Link>
          </Nav>

           <Nav>
              <a href="/meals" className='text-decoration-none'>
                <BsCart4  className='fa-2x text-danger fs-5'/>
                {/* <span class="badge rounded-pill badge-notification bg-danger top-5">0</span> */}
              </a>

              <a href="/profile" className='mx-4 text-decoration-none'>
                 <BiUserCircle  className='text-danger fs-5'/>
              </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};
export default Header;