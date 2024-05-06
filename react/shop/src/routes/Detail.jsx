import { useParams } from "react-router-dom";

export default function Detail(props) {
  let { id } = useParams();
  const isNum =
    !isNaN(parseInt(id)) &&
    parseInt(id) >= 0 &&
    parseInt(id) < props.shoes.length;

  const findShoes = props.shoes.find((i) => i.id === parseInt(id));
  return (
    <div className="container">
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
