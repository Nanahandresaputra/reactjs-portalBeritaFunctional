import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";

export let NavigationBar = ({ dataSports, category }) => {
  const [search, setSearch] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dataSports(search);
  };

  let header = [
    {
      title: "Technology",
      query: "technology",
    },
    {
      title: "Business",
      query: "business",
    },
    {
      title: "Entertainment",
      query: "entertainment",
    },
    {
      title: "Sports",
      query: "sports",
    },
    {
      title: "Science",
      query: "science",
    },
    {
      title: "Health",
      query: "health",
    },
  ];

  return (
    <div className={`${style.marginBottom}`}>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className=" py-3">
        <Container>
          <Navbar.Brand className="fw-bold fs-4" href="/">
            Portal Berita
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              {header.map((index, i) => (
                <Nav.Link key={i} className="text-light" onClick={() => category(index.query)}>
                  {index.title}
                </Nav.Link>
              ))}
            </Nav>
            <Form onSubmit={onSubmit} className="d-flex">
              <Form.Control id="action" type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
              <Button type="submit" variant="outline-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
