import React from "react";
import "./ItemDesc.scss"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SpaIcon from '@mui/icons-material/Spa';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export const ItemDesc = () => {
    return (
        <div className="ItemDesc">
        
            <div className="ProductItem">
             <TagFacesIcon className="ProdIcon"/>
             <div className="productTitle">All Skin Types</div>
             <p>Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
            <div className="ProductItem">
            <SpaIcon className="ProdIcon"/>
            <div className="productTitle">Pure Organic</div>
            <p>Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
            <div className="ProductItem">
            <VolunteerActivismIcon className="ProdIcon"/>
            <div className="productTitle">Natural Care</div>
                <p>Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
        </div>
    )
}