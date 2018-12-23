import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';

class App extends Component {
  render() {
    let x0 = 200, y0 = 125;
    let xtop = 0 , xlast = 400;
    let ytop = 0 , ylast = 250 ;
    let x1 = 10 , y1 = 200;
    let x2 = 100 , y2 = 50;
    let canvasProps = {x0, y0, xtop, xlast, ytop, ylast, x1, y1, x2, y2};
    return (
      <div className="App">
          <div class="container">
              <input type="text" class="txtin" />
              <button type="button" class="submit">submit</button>
          </div>
          <Canvas { ...canvasProps } />
      </div>
    );
  }
}

export default App;
