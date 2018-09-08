import React, { Component } from "react";
import Todoform from "./containers/Todoform";
import TodoItems from "./containers/TodoItems";

class App extends Component {
  render() {
    return (
      <div>
          <TodoItems />
          <Todoform />
      </div>
    );
  }
}

export default App;
