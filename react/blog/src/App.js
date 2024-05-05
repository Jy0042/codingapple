import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <>
      <Header />
      <List />
      <Modal2 name="철수" age={30} />
    </>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.props.name} 나이는 {this.state.age}
        나는 {this.props.age}
        <button
          onClick={() => {
            this.setState({ age: 23 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
