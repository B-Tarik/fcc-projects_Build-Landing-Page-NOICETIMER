import React, {useEffect, useRef} from "react";

import {revealOnScroll} from "../helper";

import {svgThemes} from "../svgs";

const Themes = ({isMobile}) => {
  
  const themesRef = useRef();
  
  
  useEffect(() => {
    revealOnScroll([themesRef.current], '55%')
  }, [])
  
  
  useEffect(() => {
    animate();
  }, [isMobile])
  
  
  const animate = () => {
    if(isMobile) return;

    // get Ids
    const getId = (id) => document.getElementById(id),
          one          = getId('one'),
          two          = getId('two'),
          three        = getId('three'),
          screenOne    = getId('screen-one'),
          screenTwo    = getId('screen-two'),
          screenThree  = getId('screen-three'),
          buttonOne    = getId('buttons-one'),
          buttonTwo    = getId('buttons-two'),
          buttonThree  = getId('buttons-three'),
          textTwo      = getId('text-two'),
          
    // TweenMax animations
          themestl     = new TimelineMax();
    
    const controller   = new ScrollMagic.Controller();
    
    themestl
      .from(two, 1.5, {scale: .7, transformOrigin: '50% 100%'})
      .from(one, 1.5, {scale: .8,x: -245, transformOrigin: '50% 100%', ease: Back.easeOut}, '0')
      .from(three, 1.5, {scale: .9,x: 245, transformOrigin: '50% 100%', ease: Back.easeOut}, '0')
      .to([screenOne, buttonThree], 1.5 ,{fill: '#ede064'}, '0')
      .to([screenThree, buttonOne], 1.5 ,{fill: '#ff98bc'}, '0')
      .to(screenTwo, 1.5 ,{fill: '#84C8FF'}, '0')
      .to(buttonTwo, 1.5 ,{fill: '#6494ED'}, '0')
      .to(textTwo, 1.5 ,{fill: '#69b6f4'}, '0');
    
    new ScrollMagic.Scene({
      triggerElement: themesRef.current,
      duration: 0,	
      triggerHook: 0.25
    })
      .setTween(themestl)
      .addTo(controller); 
  }
  

  return (
    <section ref={themesRef} className="themes">
      <h2 className="themes-title">Choose Your Colors</h2>
      <div className="themes-mask">
        {isMobile && <img className="illustration themes-ill" src="../images/themes.png"/>}
        {!isMobile && svgThemes}
      </div>
      <p className="themes-text">Noicetimer provides great variety of beautiful themes colors you could choose from, you can even customise your own style for your own needs.</p>
      <a className="btn themes-btn" href="https://codepen.io/B-Tarik/full/BEmaVK" target="_blank">Try Demo</a>
    </section>
  )
}

export default Themes;
