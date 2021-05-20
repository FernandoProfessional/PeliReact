import React, { useState } from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture } from '../../config/Config';
import "./Actores.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: {
      items: 2,
    },
    576: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  };
  



export const ActoresCarrousel = ({listaPersonajes}) => {

    
  
    const items = listaPersonajes.map((c) => (
        <div className="carrouselFoto">
            <img
              src={(c.profile_path)?`https://image.tmdb.org/t/p/w200/${c.profile_path}?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4`:noPicture}
              alt=""
              onDragStart={handleDragStart}
              className="carrouselImagen"
            />
            <div className="contenedor">
                {c.name}
            </div>
 

        </div>
   
    ));

    return (
        <AliceCarousel disableDotsControls responsive={responsive} mouseTracking items={items} autoPlay autoPlayInterval="3000" disableButtonsControls />
    );
}
