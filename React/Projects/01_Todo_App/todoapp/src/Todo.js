import React, { Component } from 'react';
import Todoform from './Todoform';

function TodoItems(props) {
    const items = props.items;
    const listItems = items.map( (item) =>
        <li key={item.toString()}>{item}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {todoItems: this.props.todos || []};
        this.handleTodo = this.handleTodo.bind(this);
    }

    handleTodo(newItem){
        this.setState({todoItems: this.state.todoItems.concat([newItem])});
    }

    render(){
        const todoItems = this.state.todoItems;
        return (
          <div>
              <TodoItems items={todoItems} />
              <Todoform onAddtodo={this.handleTodo}/>
          </div>
        );
    }
}

export default Todo;
