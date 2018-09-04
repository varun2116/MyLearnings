import React, { Component, Fragment } from 'react';
import Home from './Home.js';
import './App.css';

class App extends Component {
  render() {
    return <Home />;
  }
}

/*Below throws error when we try to render multiple children*/
/*class App extends Component {
  render() {
    return <Home /><h1>Here Error</h1>;
  }
}*/

/*Below are the solutions for above error*/
/*Sol1: This needs enclosing parent tag*/
/*class App extends Component {
  render() {
    return <div><Home /><h1>Here Error</h1></div>;
  }
}*/

/*Sol2: Return as array*/
/*Note: When iterating and redering a collection we need a key identifier for each item*/
/*class App extends Component {
  render() {
    return [<Home key="home"/>,<h1 key="heading">Here No Error</h1>];
  }
}*/

/*Sol3: Using Fragment*/
/*class App extends Component {
  render() {
    return (
        <Fragment>
            <Home key="home"/>
            <h1 key="heading">Here No Error</h1>
        </Fragment>
    );
  }
}*/
export default App;
