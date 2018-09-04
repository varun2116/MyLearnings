import React, { Component } from 'react';

//const TodoForm = () => <input className="form-control col-md-12" />

class TodoForm extends React.Component {

  constructor (props) {
     super(props);
     this.state = {item: ''};
  }

  onChange = (e) => {
    this.setState({item: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item);

    this.setState({item: ''}, () => this.refs.item.focus());
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="item"
               onChange={this.onChange}
               value={this.state.item} />
        <input type="submit" value="Add" />
      </form>
    );
  }
};

export default TodoForm;
