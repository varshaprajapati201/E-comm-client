import React from "react";
import "./About.scss"
import { Testomonial } from "../Testomonial/Testomonial";

export const About = () => {
    
    return (
      <div className="about">
       <img src="https://images.unsplash.com/photo-1600634999635-f1f334b8e931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <div className="heading">
      <h1>About Us</h1>
      </div>
      <div className="story">
        <div className="title">Our Story</div>
        <div className="storyDesc">
<b>Producing the highest quality skin cleanser products diam aliquam, libero tortor est risus diam ut sodales pharetra nibh lorem feugiat interdum.</b><br /><br />
Accumsan viverra volutpat vulputate pretium in sed ac feugiat rhoncus consectetur sagittis velit sollicitudin euismod amet non donec enim egestas auctor arcu id sed
 vulputate elementum, a aliquam proin viverra rutrum at praesent lorem feugiat viverra dictum lectus sed sit non venenatis risus ut viverra venenatis sagittis in. <br /><br />
Aliquam scelerisque scelerisque ac laoreet laoreet faucibus vestibulum fringilla ut aliquet dictumst dignissim id eget cras nulla in venenatis dictum tristique 
faucibus lectus egestas aenean placerat dolor dolor phasellus eros vestibulum velit turpis ornare facilisis ante ornare.</div>
      </div>
      <hr />
<Testomonial />


      </div>
    );
  }