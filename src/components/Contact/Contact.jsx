import React from "react";
import "./Contact.scss"
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Contact = () => {
    
    return (
      <div className="contact">
<div className="container">
    <img src="https://images.unsplash.com/photo-1653378972306-599af0d77fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />

<form class="form">
    
    <input type="text" placeholder="Your Name" class="input" />
    <input type="text" placeholder="Your email" class="input" />
    <textarea placeholder="Your message"></textarea>
     
    <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
</form>


</div>
        
        
      </div>
    );
  }