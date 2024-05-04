import { useState } from "react";
import Modal from "./Modal";

export default function List() {
  let [title, setTitle] = useState([
    "남자 옷 추천",
    "리액트 공부",
    "강남 맛집 추천",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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
              }}
            >
              {title[index]}
              <span
                onClick={() => {
                  let changeLike = [...like];
                  changeLike[index] += 1;
                  setLike(changeLike);
                }}
              >
                👍{" "}
              </span>
              {like[index]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal && <Modal />}
    </>
  );
}
