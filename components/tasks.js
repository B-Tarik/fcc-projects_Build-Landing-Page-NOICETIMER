import React, {useEffect, useRef} from "react";

import {revealOnScroll} from "../helper";

import {svgTasks} from "../svgs";

const Tasks = ({isMobile}) => {
  
  const tasksRef = useRef();
  
  
  useEffect(() => {
    revealOnScroll([tasksRef.current], '55%')
  }, [])
  
  
  useEffect(() => {
    animate();
  }, [isMobile])
  
  
  const animate = () => {
    if(isMobile) return;

    // get Ids
    const getId = (id) => document.getElementById(id),
          check        = getId('check'),

    // TweenMax animations
          taskstl      = new TimelineMax();
    
    const controller   = new ScrollMagic.Controller();
    
    taskstl
      .from('.days', 1.5, {opacity: 0, scaleY: .1, transformOrigin: '50% 0%'})
      .from('.todos', 1.5, {opacity: 0, scaleY: .1, transformOrigin: '50% 0%'}, '0')
      .from('.groups', 1.5, {opacity: 0, scaleX: .1, transformOrigin: '0% 50%'}, '0')
      .from(check, .5, {opacity: 0, scaleY: .1, transformOrigin: '0% 100%', ease: Expo.easeOut})
    
    new ScrollMagic.Scene({
      triggerElement: tasksRef.current,
      duration: 0,	
      triggerHook: 0.2	
    })
      .setTween(taskstl)
      .addTo(controller); 
  }
  
  
  return (
    <section ref={tasksRef} className="tasks">
      <h2 className="tasks-title">Set, Add and Manage your Tasks</h2>
      {isMobile && <img className="illustration tasks-ill" src="../images/tasks.png"/>}
      {!isMobile && svgTasks}
      <p className="tasks-text">With Noicetimer you can easily set tasks, add them to your calendar, organize and view your tasks by month or week, give custom colors, group by type and more...</p>
      <a className="btn tasks-btn" href="https://codepen.io/B-Tarik/full/BEmaVK" target="_blank">Try Demo</a>
    </section>
  )
}

export default Tasks;
