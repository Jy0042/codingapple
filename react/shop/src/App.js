import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import Products from "./components/Products";
import { useState } from "react";
import data from "./data2.js";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Detail from "./components/Detail.jsx";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="primary" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">React Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link className="homeButton" to="/">
        <Button variant="warning">홈</Button>
      </Link>
      <Link to="/detail">
        <Button variant="warning">상세 페이지</Button>
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  <Card shoes={shoes[0]} i={1} />
                  <Card shoes={shoes[1]} i={2} />
                  <Card shoes={shoes[2]} i={3} />
                  <Products />
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
