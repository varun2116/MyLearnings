import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './LoginControl';
import Page from './Page';

//Greeting
//ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root'));

//LoginControl
//ReactDOM.render(<LoginControl />, document.getElementById('root'));

//Mailbox &&
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

//Page Warning Prevent render
ReactDOM.render(<Page />, document.getElementById('root'));
