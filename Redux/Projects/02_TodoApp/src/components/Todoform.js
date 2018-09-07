import React, { Component } from 'react';

function Todoform(props) {
    const { handleTodo } = props;
    let input;
    return (
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          handleTodo(input.value);
          input.value = ''
        }}>
            <input type="text" ref={node => input = node} />
            <input type="submit" value="Submit" />
        </form>
    );
}

// class Todoform extends Component {
//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }
//     render(){
//         const { handleTodo } = this.props;
//         return (
//             <form onSubmit={e => {
//               e.preventDefault()
//               if (!this.textInput.value.trim()) {
//                 return
//               }
//               handleTodo(this.textInput.value);
//               this.textInput.value = ''
//             }}>
//                 <input type="text" ref={this.textInput} />
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

export default Todoform;
