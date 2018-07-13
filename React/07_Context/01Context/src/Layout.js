import React from "react";
import logo from './logo.svg';
import ErrorBoundary from './ErrorBoundary';
import { App, AppHeader, AppIntro, Title, AppLogo} from './styles';

export default function Layout({title, renderContent}){
    return(
        <App>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <Title>{title}</Title>
            </AppHeader>
            <ErrorBoundary>
              {renderContent()}
            </ErrorBoundary>
        </App>
    );
}

//Higher Order Component Function
export function withLayout(title){
  return Component => props => (
    <Layout
      title={title}
      renderContent={()=>(
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      )}
    />
  )
}
