import { useState } from "react";
import "./App.css";

function App() {
  let [logo, setLogo] = useState("React Blog");
  let [title, setTitle] = useState([
    "남자 옷 추천",
    "리액트 공부",
    "강남 맛집 추천",
  ]);
  let [like, setLike] = useState(0);

  return (
    <>
      <div className="black-nav">
        <h4 style={{ color: "yellow", fontSize: "16px" }}>{logo}</h4>
      </div>

      <button
        onClick={() => {
          let titleChange = [...title];
          if (titleChange[0] === "남자 옷 추천") {
            titleChange[0] = "여자 옷 추천";
          } else {
            titleChange[0] = "남자 옷 추천";
          }
          setTitle(titleChange);
        }}
      >
        Change Title
      </button>

      <button
        onClick={() => {
          let sortTitle = [...title];
          sortTitle.sort();
          setTitle(sortTitle);
        }}
      >
        이름순 정렬
      </button>

      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
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
