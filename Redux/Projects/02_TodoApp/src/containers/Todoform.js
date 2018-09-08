import React, { Component } from 'react';
import Todoform from '../components/Todoform';
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

export class TodoformCont extends Component {
    render(){
        return (
            <Todoform {...this.props} />
        );
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        handleTodo: payload => {
            dispatch(addTodo(payload));
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoformCont);
