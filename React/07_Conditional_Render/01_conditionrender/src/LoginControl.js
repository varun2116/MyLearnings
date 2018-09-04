import React, {Component} from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;
