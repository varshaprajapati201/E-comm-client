import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({item}) => {
  return (    
    
    <div class="shell">
  <div class="container">
    <div class="row">
    
      <div class="col-md-3">
      <Link to={`/product/${item.id}`} className="link">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            {/* <div class="category">
              <span>{item?.attributes?.category?.title}</span>
            </div> */}
            <div class="title-product">
              <h2>{item?.attributes.title}</h2>
            </div>
            
            <div class="card-footer">
              <div class="wcf-left">
              <span className="price">${item?.attributes?.price}</span>
              </div>
              <div class="wcf-right"><a href="#" class="buy-btn"><ShoppingCartOutlinedIcon/></a></div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      

    </div>
  </div>
</div>

  );
}

export default Card
