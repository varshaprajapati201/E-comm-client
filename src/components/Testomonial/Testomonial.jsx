import React from "react";

import "./Testomonial.css"

export const Testomonial =()=> {
  return (
    <div className="testi"> 

    <div className="TestiTitle">
    <h1>What Our Customers Say</h1>
    </div>

    <div class="testimonial-quote group">
        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div class="quote-container">
            <blockquote>
                <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
            </blockquote>  
            <cite><span>Kristi Bruno</span>
            </cite>
        </div>
    </div>    
        
    <hr/>
             
    <div class="testimonial-quote group right">
        <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>JAMES OLIVER</span><br />
    
                </cite>
            </div>
        </div>
    </div>     

    <hr />
         
    <div class="testimonial-quote group " >
        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div class="quote-container">
            <div>
                <blockquote>
                    <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
                </blockquote>  
                <cite><span>Nate Safar</span>
                    
                </cite>
            </div>
        </div>
    </div>   
      
    <hr />
    
    <div class="testimonial-quote group right" >
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <div class="quote-container">
            <blockquote>
                <p>Overall, fantastic! I'd recommend them to anyone looking for a creative,<br /> thoughtful, and professional team.”</p>
            </blockquote>  
            <cite><span>Jamie Fisher</span>
                
            </cite>
        </div> 
    </div>

</div>
  );
}