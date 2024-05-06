import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import Products from "./components/Products";
import { useState } from "react";
import data from "./data2.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./routes/Detail.jsx";
import About from "./routes/About.jsx";
import EventPage from "./routes/EventPage.jsx";
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const fetchData = () => {
    if (clickCount >= 2) {
      alert("마지막 페이지 입니다.");
      return;
    }
    setLoading(true);
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        let copy = [...shoes, ...result.data];
        setShoes(copy);
        setLoading(false);
        setClickCount(clickCount + 1);
      })
      .catch(() => {
        console.log("실패");
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="primary" className="custom-navbar">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => {
              navigate("/");
            }}
          >
            React Shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link className="homeButton" to="/">
        <Button variant="warning">홈</Button>
      </Link>
      <Link to="/detail">
        <Button variant="warning">상세 페이지</Button>
      </Link> */}

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
                  <Card shoes={shoes} />
                  <Products shoes={shoes} />
                </div>
              </div>
              <button onClick={fetchData} disabled={loading}>
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주분 시 티셔츠 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  const navigate = useNavigate();

  return (
    <>
      {props.shoes.map((item, i) => {
        return (
          <div className="col-md-4" key={i}>
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (parseInt(i) + 1) +
                ".jpg"
              }
              width="80%"
              alt="신발 이미지"
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
