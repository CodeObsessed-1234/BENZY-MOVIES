import React from "react";
import "./Main.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function moveDown() {
  
  let downArrow = document.getElementById("downArrow")
  downArrow.scrollIntoView(true)
}

function Main() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="main" data-aos='flip-left'>
      <div className="first">
        <h1 id="content">Welcome back! <br></br>
          Unlimited movies, TV shows and more. <br></br>
          Watch anywhere. Cancel anytime. </h1>
        <p id="downArrow" onClick={moveDown}>&#8595;</p>
      </div>

    </div>

  );
}



export default Main