import React from "react";
import "./App.css";
import Main from "../src/components";
import { Nav, Navbar } from "react-bootstrap";
function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="custom-navbar" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/bloglist">Blog List Page</Nav.Link>
            <Nav.Link href="/addblog">Add Blog Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main />
    </div>
  );
}

export default App;
