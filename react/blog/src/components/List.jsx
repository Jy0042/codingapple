import { useState } from "react";
import Modal from "./Modal";

export default function List() {
  let [title, setTitle] = useState([
    "남자 옷 추천",
    "리액트 공부",
    "강남 맛집 추천",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false, false, false);
  const [modalTitle, setModalTitle] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [date, setDate] = useState(["2월 17일", "3월 15일", "4월 22일"]);

  return (
    <>
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

      {/* <div className="list">
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
        <h4 onClick={() => setModal(!modal)}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
       */}

      {title.map(function (item, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(index);
              }}
            >
              {title[index]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let changeLike = [...like];
                  changeLike[index] += 1;
                  setLike(changeLike);
                }}
              >
                👍{" "}
              </span>
              {like[index]}
            </h4>
            <p>
              {date[index]} 발행{" "}
              <button
                onClick={() => {
                  let deleteTitle = [...title];
                  deleteTitle.splice(index, 1);
                  setTitle(deleteTitle);
                }}
              >
                삭제
              </button>
            </p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputVal === "") {
            alert("공백 x");
          } else {
            let createTitle = [...title];
            createTitle.unshift(inputVal);
            setTitle(createTitle);

            let createLike = [...like];
            createLike.unshift(0);
            setLike(createLike);

            let createDate = [...date];
            let currentDate = new Date().toLocaleDateString("ko-KR", {
              month: "long",
              day: "numeric",
            });
            createDate.unshift(currentDate);
            setDate(createDate);
          }
        }}
      >
        글 쓰기
      </button>

      {modal && (
        <Modal
          title={title}
          color={"lightblue"}
          setTitle={setTitle}
          modalTitle={modalTitle}
        />
      )}
    </>
  );
}
