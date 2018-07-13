import React from "react";
import logo from './logo.svg';
import { App, AppHeader, AppIntro, Title, AppLogo} from './styles';

const pStyles = {backgroundColor: "red"};

export default function Home(){
    return(
        <App>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <Title>Welcome to React</Title>
            </AppHeader>
            <AppIntro style={pStyles}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </AppIntro>
        </App>
    );
}
