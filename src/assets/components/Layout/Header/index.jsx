import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "../Header/style.css"
import { FavContextApi } from '../../../contexts/favContext';



function Header() {
  const {favs, setFavs} = useContext(FavContextApi);
  
  return (
    <>
      <Navbar data-bs-theme="light" className='navHead' expand="lg" fixed="top">
        <Container className='d-flex justify-content-between navbarCont'>
          <Navbar.Brand className='navLogo' href="#home">COLO<span style={{color:'#fe4c50'}}>SHOP</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center p-3 gap-4 navMenu">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">SHOP</Nav.Link>
            <Nav.Link href="#pricing">PROMOTION</Nav.Link>
            <Nav.Link href="#pricing">PAGES</Nav.Link>
            <Nav.Link href="#pricing">BLOG</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
          </Navbar.Collapse>

          <Nav className="navIcons">
            <Nav.Link href="#home"><FaSearch className='text-dark'/></Nav.Link>
            <Nav.Link href="#features"><FaUser className='text-dark'/></Nav.Link>
            <Nav.Link href="#pricing"><SlBasket className='text-dark'/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header
