import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "../Header/style.css";
import { FavContextApi } from "../../../contexts/favContext";
import { Link } from "react-router-dom";

function Header() {
  const { favs } = useContext(FavContextApi);

  return (
    <>
      <Navbar data-bs-theme="light" className="navHead" expand="lg" fixed="top">
        <Container className="d-flex justify-content-between navbarCont">
          <Navbar.Brand as={Link} to="/" className="navLogo" href="#home">
            COLO<span style={{ color: "#fe4c50" }}>SHOP</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-center p-3 gap-4 navMenu">
              <Nav.Link as={Link} to="/" href="#home">HOME</Nav.Link>
              <Nav.Link as={Link} to="/shopping-page" href="#features">SHOP</Nav.Link>
              <Nav.Link href="#pricing">PROMOTION</Nav.Link>
              <Nav.Link href="#pricing">PAGES</Nav.Link>
              <Nav.Link href="#pricing">BLOG</Nav.Link>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="navIcons">
            <Nav.Link href="#home">
              <FaSearch className="text-dark" />
            </Nav.Link>
            <Nav.Link href="#features">
              <FaUser className="text-dark" />
            </Nav.Link>
            <Nav.Link as={Link} to="/basket">
              <SlBasket className="text-dark" />
              {favs.length > 0 && (
                <span className="basket-count">{favs.length}</span>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
