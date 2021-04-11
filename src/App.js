import React, {useState, useContext} from "react";
import "./App.scss";
import { Route, Switch } from "react-router";
import Main from "./components/Main";
import More from "./components/More";
import {  ThemeContext, ThemeProvider } from "./theme/ThemeProvider";
 import SwitchTheme from "./theme/SwitchTheme";
import "./components/_components.scss";
import Nav from "./components/Nav";
import WeirdCursor from "./components/WeirdCursor";


function App() {
  return (
    <ThemeProvider>

      <Holder />
    
    </ThemeProvider>
  );
}

function Holder(){
  const [switched, toggleSwitch] = useState(true);
  const { bodyTheme, toggle } = useContext(ThemeContext);

  return(
    <div className={`App  text-center ${bodyTheme.background}  `}>
     <Nav />

     <WeirdCursor />

    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/projects" component={More} />
    </Switch>

    <SwitchTheme   switchTheme={toggle}
    checked={switched}
    toggleCheck={() => toggleSwitch(!switched)} />
    <span>⭐⭐Designed and built by Cynthia Akinade,      © {new Date().getFullYear()}  </span>
  </div>
  )


}

export default App;
