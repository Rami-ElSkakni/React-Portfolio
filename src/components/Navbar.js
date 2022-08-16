import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useState} from 'react'

function NavbarHeader() {

  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container className={classes.navcontainer}>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand fs-3">
            Rami Sakakini
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${classes.navlinkcontainer}`}
        >
          <Nav className={classes.navlinkcontainer2}>
            <Link to="/projects" className={classes.navLinkItem} onClick={() => setExpanded(false)}>
              Projects
            </Link>
            <Link to="/skills" className={classes.navLinkItem} onClick={() => setExpanded(false)}>
              Skills
            </Link>
            <Link to="/contact" className={classes.navLinkItem} onClick={() => setExpanded(false)}>
              Contact
            </Link>
            <a href="Rami_ElSkakini.pdf" download="Rami_ElSkakini" className={classes.navLinkCV}>Download My CV</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
