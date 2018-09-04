import React,{ Component } from 'react';

class EssayForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: 'Please write an essay about your favorite DOM element.'};
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        alert(`Essay Submitted: ${this.state.value}`);
        e.preventDefault();
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

export default EssayForm;
