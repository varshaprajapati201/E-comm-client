import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Hero.scss"
export const Hero = () => {
    
    const photo = [
        "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1564594326930-17381130fd2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      ];

      const [currentSlide, setCurrentSlide] = useState(0);

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

    return (
        <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src={photo[0]} alt="" />
          <img src={photo[1]} alt="" />
          <img src={photo[2]} alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    );
  }