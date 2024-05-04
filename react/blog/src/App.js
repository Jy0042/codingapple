import { useState } from "react";
import "./App.css";

function App() {
  let [logo, setLogo] = useState("React Blog");
  let [title, setTitle] = useState([
    "여자 옷 추천",
    "남자 옷 추천",
    "맛집 추천",
  ]);

  return (
    <>
      <div className="black-nav">
        <h4 style={{ color: "yellow", fontSize: "16px" }}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </>
  );
}

export default App;
