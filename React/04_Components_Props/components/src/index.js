import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

const element = <Welcome name="Sara" />;

//ReactDOM.render(element, document.getElementById('root'));

//Multiple times Welcome
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
