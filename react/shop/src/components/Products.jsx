import data from "../data.js";
import { useState } from "react";

export default function Products() {
  const [shoes] = useState(data);

  return (
    <>
      {shoes.map((item, i) => {
        return (
          <div className="col-md-4" key={i}>
            {/* <img src={process.env.PUBLIC_URL + "/on.webp"} width="80%" /> */}
            <img
              src={process.env.PUBLIC_URL + item.image}
              width="80%"
              alt="신발 이미지"
            />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </>
  );
}
