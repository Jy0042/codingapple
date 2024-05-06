import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg === "blue" ? "white" : "black")};
//   padding: 10px;
// `;

let Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export default function Detail(props) {
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(true);
  let [num, setNum] = useState("");

  let { id } = useParams();

  const isNum =
    !isNaN(parseInt(id)) &&
    parseInt(id) >= 0 &&
    parseInt(id) < props.shoes.length;

  const findShoes = props.shoes.find((i) => i.id === parseInt(id));

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("숫자만 입력하세요");
    }
  }, [num]);

  return (
    <div className="container">
      {time === true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {/* <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn> */}
      <div className="row">
        {isNum ? (
          <>
            <div className="col-md-6">
              <img
                src={
                  "https://codingapple1.github.io/shop/shoes" +
                  (parseInt(id) + 1) +
                  ".jpg"
                }
                width="100%"
                alt="신발 이미지"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{findShoes.title}</h4>
              <p>{findShoes.content}</p>
              <p>{findShoes.price}</p>
              <Input
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />

              <button className="btn btn-danger">주문하기</button>
            </div>
          </>
        ) : (
          <div className="col-md-12">
            <p>해당 상품을 찾을 수 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
