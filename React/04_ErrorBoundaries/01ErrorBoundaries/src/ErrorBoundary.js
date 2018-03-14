import React, { Component } from 'react';
import Home from './Home.js';
import './App.css';

export default class ErrorBoundary extends Component {
  state = {
    error : false
  };

  componentDidCatch() {
      this.setState({error:true});
  }
  render() {
    if(this.state.error){
      return <h1>Oops!</h1>;
    }
      return this.props.children;
  }
}
