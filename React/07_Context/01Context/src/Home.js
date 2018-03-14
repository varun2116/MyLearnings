import React from "react";
import { AppIntro } from './styles';
import { withLayout } from './Layout';
import Greeting from './Greeting';

export function Home({ updateMessage }){
    //throw new Error();
    return(
          <React.Fragment>
             <AppIntro>
               To get started, edit <code>src/App.js</code> and save to reload.
             </AppIntro>
             <Greeting />
             <button onClick={()=>(updateMessage("foo"))}>Click Me!</button>
          </React.Fragment>
    );
}

export default withLayout("Welcome to React!")(Home);
