import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './Todoform';
import TodoItems from './TodoItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: this.props.todos || [] }
  }
  addTodo = (item) => {
    this.setState({todos: this.state.todos.concat([item])});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
          <TodoItems items={this.state.todos} />
          <TodoForm addTodo={this.addTodo} />
        </header>
      </div>
    );
  }
}


export default App;
