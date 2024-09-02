"use client";

import { useState } from "react";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [num, setNum] = useState(new Array(product.length).fill(0));

  const numIncrement = (i) => {
    let copy = [...num];
    copy[i]++;
    setNum(copy);
  };

  const numDecrement = (i) => {
    let copy = [...num];
    if (copy[i] > 0) {
      copy[i]--;
      setNum(copy);
    }
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <span> {num[i]} </span>
            <button
              onClick={() => {
                numIncrement(i);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                numDecrement(i);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
