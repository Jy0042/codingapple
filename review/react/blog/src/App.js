import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [input, setInput] = useState("");

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

      {title.map(function (t, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const newLike = [...like];
                  newLike[i] += 1;
                  setLike(newLike);
                }}
              >
                👍
              </span>
              {like[i]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const delTitle = [...title];
                  delTitle.splice(i, 1);
                  setTitle(delTitle);
                }}
              >
                글 삭제
              </button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button
        onClick={() => {
          const createTitle = [...title];
          createTitle.unshift(input);
          input.trim() !== "" ? setTitle(createTitle) : alert("글을 입력해주세요");
          setInput("");
          const createLike = [...like];
          createLike.unshift(0);
          setLike(createLike);
        }}
      >
        글 생성
      </button>
      {modal === true ? (
        <Modal color="beige" title={title} setTitle={setTitle} modalTitle={modalTitle} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const newTitle = [...props.title];
          newTitle[0] = "여자 코트 추천";
          props.setTitle(newTitle);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
