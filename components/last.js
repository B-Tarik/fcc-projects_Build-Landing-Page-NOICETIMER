import React, {useEffect, useRef} from "react";

import {revealOnScroll} from "../helper";

const LastSection = () => {
  
  const lastRef = useRef();
  
  
  useEffect(() => {
    revealOnScroll([lastRef.current], '55%')
  }, [])
  
  
  return (
    <section ref={lastRef} className="last">
      <h2 className="last-title">So ready to give it a try?</h2>
      <a className="btn last-btn" href="https://codepen.io/B-Tarik/full/BEmaVK" target="_blank">Try Demo</a>
      <p className="last-text">Stay up to-date with our latest product</p>
      <div className="last-email-form">
        <input placeholder="Enter your email..."/>
        <button>Submit</button>
      </div>
      <footer>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Follow us</a></li>
        </ul>
      </footer>
    </section>
  )
}

export default LastSection;
