import React, {useEffect, useRef} from "react";

import {revealOnScroll} from "../helper";

import {svgGraph} from "../svgs";

const Graph = ({isMobile}) => {
  
  const graphRef = useRef();
  
  
  useEffect(() => {
    revealOnScroll([graphRef.current], '55%')
  }, [])
  
  
  useEffect(() => {
    animate();
  }, [isMobile])
  
  
  const animate = () => {
    if(isMobile) return;

    // get Ids
    const getId = (id) => document.getElementById(id),
          chartYellow  = getId('chart-yellow'),
          chartBlue    = getId('chart-blue'),
          pieYellow    = getId('pie-yellow'),
          pieBlue      = getId('pie-blue'),
          
    // TweenMax animations
          graphtl      = new TimelineMax();
    
    const controller   = new ScrollMagic.Controller();
    
    graphtl
      .from(chartYellow, 1.5, {opacity: 0, scaleY: .1, transformOrigin: '50% 100%', ease: SlowMo.easeOut})
      .from(chartBlue, 1.5, {opacity: 0, scaleY: .1, transformOrigin: '50% 100%', ease: SlowMo.easeOut}, '-=1')
      .from(pieYellow, 1.5, {strokeDasharray: '0 156'}, '0')
      .from(pieBlue, 1.5, {strokeDasharray: '0 156'}, '0')
      .from('.svgGraph-text', 1.5, {opacity: 0, scaleX: .1, transformOrigin: '0% 50%', ease: Expo.easeOut}, '-=1')
    
    new ScrollMagic.Scene({
      triggerElement: graphRef.current,
      duration: 0,	
      triggerHook: 0.2	
    })
      .setTween(graphtl)
      .addTo(controller); 
  }
  
  
  return (
    <section ref={graphRef} className="graph">
      <h2 className="graph-title" >Performance Graph</h2>
      {isMobile && <img className="illustration graph-ill" src="../images/graph.png"/>}
      {!isMobile && svgGraph}
      <p className="graph-text" >Noicetimer will help you check your performance by giving you detailed information of your activities so you can find your most productive zone.</p>
      <a className="btn graph-btn" href="https://codepen.io/B-Tarik/full/BEmaVK" target="_blank">Try Demo</a>
    </section>
  )
}

export default Graph;
