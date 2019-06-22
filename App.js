import React, {useState, useEffect} from "react";

import Home from "./components/home";
import Themes from "./components/themes";
import Tasks from "./components/tasks";
import Graph from "./components/graph";
import LastSection from "./components/last";

import './app.scss';

const App = () => {
  
  const [isMobile, setIsMobile] = useState(true);
  
  
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, [])
  
  
  const onResize = () => {
    const width = document.body.clientWidth;
    if(width < 800) setIsMobile(true)
    else setIsMobile(false)
  }
  
  
  return (
    <div className="app">
      <Home   isMobile={isMobile} />
      <Themes isMobile={isMobile} />
      <Tasks  isMobile={isMobile} />
      <Graph  isMobile={isMobile} />
      <LastSection />
    </div>
  );
  
}


export default App;
