import { useParams } from "react-router-dom";
// import styled from "styled-components";

// const YellowButton = styled.button`
//   background: ${(props) => props.color};
//   color: ${(props) => (props.color === "skyblue" ? "white" : "black")};
//   padding: 10px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Box = styled.div`
//   background: gray;
//   padding: 20px;
// `;

export default function DetailPage(props) {
  let { id } = useParams();
  let imgId = parseInt(id) + 1;
  let product = props.shoes.find(function (x) {
    return x.id === parseInt(id);
  });

  return (
    <div className="container">
      {/* <Box>
        <YellowButton color="skyblue">버튼</YellowButton>
        <YellowButton color="lightpink">버튼</YellowButton>
      </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${imgId}.jpg`}
            width="100%"
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
