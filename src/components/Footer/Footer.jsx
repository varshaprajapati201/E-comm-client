import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
export const Footer = () => {
    
    return (
      
       <div>
       
<footer class="footer-distributed">

      <div class="footer-left">

      <Link className ="link" to="/"><img src="asset/Logo-fotor-20230812181714.jpg" alt="" /></Link>


        <p class="footer-links">
          <a href="/" class="link-1">Home</a>
                  
          <a href="/products/1">Makeup</a>
        
          <a href="/products/2">Skin Care</a>
          
          <a href="/products/3">Hair Care</a>
          
          <a href="/about">About</a>

          <a href="/contact">Contact</a>
        </p>

        <p class="footer-company-name">Lavender © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>14 M. Church Ave</span>New Delhi, India</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="">support@company.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#"><InstagramIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          <a href="#"><GitHubIcon /></a>

        </div>

      </div>

    </footer>
</div>
        

    );
  }