import React from "react";
import "./Head.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Head() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="head" data-aos='fade-right'>

      <div className="appName">
        <h1>BENZY</h1>
      </div>

      <div className="other">
        <select id="dropbox">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Panjabi">Panjabi</option>
        </select>
        <h2 id="signout">Sign In</h2>
      </div>
    </div>
  );
}
export default Head