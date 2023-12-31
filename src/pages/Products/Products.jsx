import React, { useState } from "react";
import "./Products.scss"
import { List } from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";


export const Products = () => {
    
const catId = parseInt(useParams().id)
const [maxPrice, setMaxPrice] = useState(1000);
const [sort, setSort] = useState("asc");
const [selectedSubCats, setSelectedSubCats] = useState([]);

const { data, loading, error } = useFetch(
  `/sub-categories?[filters][categories][id][$eq]=${catId}`
);

const handleChange = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;

  setSelectedSubCats(
    isChecked
      ? [...selectedSubCats, value]
      : selectedSubCats.filter((item) => item !== value)
  );
};

    return (
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Filter by Categories</h2>
            {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
              <label htmlFor="asc">Price: low to high</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
              <label htmlFor="desc">Price: high to low</label>
            </div>
          </div>
          
        </div>
        <div className="right">
          <img className="catImg" src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
        
      </div>
    );
  }