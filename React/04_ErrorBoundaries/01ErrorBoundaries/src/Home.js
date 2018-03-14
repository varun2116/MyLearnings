import React from "react";
import { AppIntro } from './styles';
import { withLayout } from './Layout';

export function Home(){
    //throw new Error();
    return(
          <React.Fragment>
             <AppIntro>
               To get started, edit <code>src/App.js</code> and save to reload.
             </AppIntro>
             <h2>Layout</h2>
          </React.Fragment>
    );
}

export default withLayout("Welcome to React!")(Home);
