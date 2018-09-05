import React, { Component } from 'react';

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', error:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        //alert(`A New Todo ${this.state.value}`);
        e.preventDefault();
        if(this.state.value == ''){
            this.setState({error:"Please enter something"});
            return null;
        }
        this.props.onAddtodo(this.state.value);
        this.setState({value: '', error: ''});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.error}</p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Todoform;
