# Child Component

we can Render a single child component like
    class App extends Component {
      render() {
        return <Home />;
      }
    }


when we try to render multiple children in the same way as below
    class App extends Component {
      render() {
        return <Home /><h1>Here Error</h1>;
      }
    }

It thows an error stating "Adjacent JSX elements must be wrapped in an enclosing tag"

Below are the solutions for above error

    Sol1: This needs enclosing parent tag
        class App extends Component {
          render() {
            return <div><Home /><h1>Here Error</h1></div>;
          }
        }

    Sol2: Return as array
    Note: When iterating and redering a collection we need a key identifier for each item
        class App extends Component {
          render() {
            return [<Home key="home"/>,<h1 key="heading">Here No Error</h1>];
          }
        }

    Sol3: Using Fragment
        First we need to import Fragment as shown below
        import React, { Component, Fragment } from 'react';
        
        class App extends Component {
          render() {
            return (
                <Fragment>
                    <Home key="home"/>
                    <h1 key="heading">Here No Error</h1>
                </Fragment>
            );
          }
        }