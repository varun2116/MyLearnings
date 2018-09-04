import React from 'react';

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>{number}</li>
//     );
//     return  (
//         <ul>{listItems}</ul>
//     );
// }

//embedding map() in jsx

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    // const listItems = numbers.map( (number) =>
    //   <ListItem key={number.toString()}
    //             value={number} />
    // );

    return (
        // <ul>{listItems}</ul>
        <ul>
        {numbers.map( (number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
        </ul>
    )
}

export default NumberList;
