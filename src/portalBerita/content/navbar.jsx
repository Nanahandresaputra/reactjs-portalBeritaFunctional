import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";

export let NavigationBar = ({ dataSports }) => {
  return (
    <div className={`${style.marginBottom}`}>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Portal Berita</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              {/* <Nav.Link href="#action1">Home</Nav.Link> */}
              {/* <Nav.Link href="#">Olahraga</Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                id="action"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={({ target }) => {
                  dataSports(target.value);
                }}
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
