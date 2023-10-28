import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="shadow-sm mb-3 custom-navbar-bg">
      <Container>
        <Nav className="me-auto">
          <img id="logo" src="../logo.png"></img>
          <Nav.Link to={"/"} as={NavLink}>
            <span>Home</span>
          </Nav.Link>
          <Nav.Link to={"/fixtures"} as={NavLink}>
            <span>Fixtures</span>
          </Nav.Link>
          <Nav.Link to={"/table"} as={NavLink}>
            <span>Table</span>
          </Nav.Link>
          <Nav.Link to={"/news"} as={NavLink}>
            <span>News</span>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
