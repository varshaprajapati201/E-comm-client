import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import "./Navbar.scss"

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Cart} from "../Cart/Cart";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [open,setOpen] = useState(false)
 const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="left">

        <Link className ="link" to="/"><img src="asset/Logo-fotor-20230812181714.jpg" alt="" /></Link>

        </div>
        
        <div className="center">
          
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>

        <div className="item">
            <Link className ="link" to="/products/1">Make Up</Link>
          </div>
          
          <div className="item">
            <Link className ="link" to="/products/2">Skin Care</Link>
          </div>
          
          <div className="item">
            <Link className ="link" to="/products/3">Hair Care</Link>
          </div>
          
          <div className="item">
            <Link className ="link" to="/about">About</Link>
          </div>
          
          <div className="item">
            <Link className ="link" to="/contact">Contact</Link>
          </div>
       
        </div> 

        <div className="right">   
          
          <div className="icons">
          
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            
             <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div> 
          </div>

        </div>
    </div>
      {open && <Cart />}
    </div>
  );
}

