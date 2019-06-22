import React, {useEffect} from "react";

import {svgLogo, svgHome} from "../svgs";

const Home = ({isMobile}) => {
  
  useEffect(() => {
    animate();
  }, [isMobile])
  
  
  const animate = () => {
    if(isMobile) return;

    // get Ids
    const getId = (id) => document.getElementById(id),
          grid         = getId('grid'),
          phoneShadow  = getId('phone-shadow'),
          phoneFrame   = getId('phone-frame'),
          appUpper     = getId('app-upper'),
          appLower     = getId('app-lower'),

    // TweenMax animations
          hometl       = new TimelineMax();
    
    hometl
      .from(grid, 5, {y: 20, opacity: 0})
      .from(phoneFrame, 5, {y: -20, opacity: 0, ease: Back.easeOut}, '-=4')
      .from(phoneShadow, 5, {opacity: 0, ease: Back.easeOut}, '-=4')
      .from(appLower, 5, {opacity: 0, ease: Back.easeOut}, '-=4')
      .from(appUpper, 5, {y: -20, opacity: 0, ease: Back.easeOut}, '-=4')
  }
  
  
  return (
    <section className="home">
      <nav className="home-nav">
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Follow us</a></li>
        </ul>
      </nav>
      <div className="home-logo">{svgLogo} NOICETIMER</div>
      <h1 className="home-title">Simple, Beautiful and easy to use Pomodoro timer</h1>
      {isMobile && <img className="illustration home-ill" src="../images/home.png"/>}
      {!isMobile && svgHome}
      <a className="btn home-btn" href="https://codepen.io/B-Tarik/full/BEmaVK" target="_blank">Try Demo</a>
    </section>
  )
}


export default Home;
