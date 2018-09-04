import React,{ Component } from 'react';

class EssayForm extends Component {
    constructor(props) {

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                  Essay:
                  <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
