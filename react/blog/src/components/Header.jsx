import { useState } from "react";

export default function Header() {
  let [logo, setLogo] = useState("React Blog");

  return (
    <div className="black-nav">
      <h4
        style={{ color: "yellow", fontSize: "16px" }}
        onClick={() => {
          let logoText = logo;
          if (logoText === "React Blog") {
            logoText = "리액트 블로그";
          } else {
            logoText = "React Blog";
          }
          setLogo(logoText);
        }}
      >
        {logo}
      </h4>
    </div>
  );
}
