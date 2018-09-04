import React from 'react';

// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }

//with Arrow function
class LoggingButton extends React.Component {
    handleClick() {
        console.log(`this is : `, this);
    }

    render(){
        return (
            <button onClick={(e) => this.handleClick(e) }>
              Click me
            </button>
        );
    }
}


export default LoggingButton;
