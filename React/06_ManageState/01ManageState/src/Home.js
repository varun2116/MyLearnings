import React from "react";
import { AppIntro } from './styles';
import { withLayout } from './Layout';

export function Home({ message, updateMessage }){
    //throw new Error();
    return(
          <React.Fragment>
             <AppIntro>
               To get started, edit <code>src/App.js</code> and save to reload.
             </AppIntro>
             <h2>{message}</h2>
             <button onClick={()=>(updateMessage("foo"))}>Click Me!</button>
          </React.Fragment>
    );
}

export default withLayout("Welcome to React!")(Home);
