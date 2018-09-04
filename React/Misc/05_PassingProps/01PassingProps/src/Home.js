import React from "react";
import { AppIntro } from './styles';
import { withLayout } from './Layout';

export function Home(props){
    //throw new Error();
    return(
          <React.Fragment>
             <AppIntro>
               To get started, edit <code>src/App.js</code> and save to reload.
             </AppIntro>
             <h2>{props.message}</h2>
          </React.Fragment>
    );
}

export default withLayout("Welcome to React!")(Home);
