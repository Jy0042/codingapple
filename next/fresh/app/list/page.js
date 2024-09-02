import Image from "next/image";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let img = ["food0", "food1", "food2"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
