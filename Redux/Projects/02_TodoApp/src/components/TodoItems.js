import React, { Component } from 'react';
import Todoform from './Todoform';

export function TodoItems(props) {
    const items = props.items;
    const { toggleTodoItem } = props;
    const listItems = items.map( (item) =>
        <li key={item.id.toString()} onClick={(e) => toggleTodoItem(item.id)}>{item.text}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default TodoItems;
