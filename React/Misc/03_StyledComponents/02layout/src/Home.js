import React from "react";
import { AppIntro } from './styles';
import Layout from './Layout';

export default function Home(){
    return(
      <Layout
        title="Welcome to React"
        renderContent={()=> (
          <React.Fragment>
             <AppIntro>
               To get started, edit <code>src/App.js</code> and save to reload.
             </AppIntro>
             <h2>Layout</h2>
          </React.Fragment>
       )}
       />
    );
}
