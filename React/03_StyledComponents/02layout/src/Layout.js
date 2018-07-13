import React from "react";
import logo from './logo.svg';
import { App, AppHeader, AppIntro, Title, AppLogo} from './styles';

export default function Layout({title, renderContent}){
    return(
        <App>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <Title>{title}</Title>
            </AppHeader>
            {renderContent()}
        </App>
    );
}
