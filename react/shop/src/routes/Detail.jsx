import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";
import { cartAdd } from "./../store/productSlice.js";
import { useDispatch } from "react-redux";

let Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export default function Detail(props) {
  let dispatch = useDispatch();

  let { inven } = useContext(Context1);

  let [time, setTime] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [effect, setEffect] = useState("");

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

  useEffect(() => {
    let a = setTimeout(() => {
      setEffect("end2");
    }, 100);
    return () => {
      clearTimeout(a);
      setEffect("");
    };
  }, []);

  return (
    <div className={"container start2 " + effect}>
      {time === true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
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

              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(
                    cartAdd({
                      id: findShoes.id,
                      name: findShoes.title,
                      count: 1,
                    })
                  );
                }}
              >
                주문하기
              </button>
            </div>
          </>
        ) : (
          <div className="col-md-12">
            <p>해당 상품을 찾을 수 없습니다.</p>
          </div>
        )}

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTab(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTab(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                setTab(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </div>
    </div>
  );
  function TabContent({ tab }) {
    let { inven } = useContext(Context1);

    let [fade, setFade] = useState("");
    useEffect(() => {
      let time = setTimeout(() => {
        setFade("end");
      }, 100);
      return () => {
        clearTimeout(time);
        setFade("");
      };
    }, [tab]);

    return (
      <div className={`start + ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    );
  }
}
