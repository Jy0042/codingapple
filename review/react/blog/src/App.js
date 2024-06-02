import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  const [like, setLike] = useState([0, 0, 0]);

  const increaseLike = (index) => {
    const newLike = [...like];
    newLike[index] += 1;
    setLike(newLike);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          const copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순 정렬
      </button>
      <button
        onClick={() => {
          const newTitle = [...title];
          newTitle[0] = "여자 코트 추천";
          setTitle(newTitle);
        }}
      >
        글 수정
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={(e) => {
              increaseLike(0);
            }}
          >
            👍
          </span>{" "}
          {like[0]}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]} <span>👍</span> {like[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[2]} <span>👍</span> {like[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
