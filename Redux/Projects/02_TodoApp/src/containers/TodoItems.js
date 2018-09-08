import React, { Component } from 'react';
import TodoItems from '../components/TodoItems';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions'

export class TodoItemsCont extends Component {
    render(){
        return <TodoItems {...this.props} />
    }
}

export const mapStateToProps = store => {
  return {
    items: store.todos
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        toggleTodoItem: id => {
            console.log(id);
            dispatch(toggleTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
