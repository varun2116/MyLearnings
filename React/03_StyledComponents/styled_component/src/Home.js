import React from "react";
import logo from './logo.svg';

const pStyles = {backgroundColor: "red"};

export default function Home(){
    return(
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro" style={pStyles}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}
