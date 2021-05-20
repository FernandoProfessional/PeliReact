import axios from "axios";
import React, { useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { Link } from 'react-router-dom';


const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 3,
  },
  576: {
    items: 4,
  },
  1024: {
    items: 5,
  },
};

export const Carrousel = ({enlaceApi}) => {
    const [content, setContent] = useState([])

    const fetchMovies = async() => {
      const { data } = await axios.get(enlaceApi)
      setContent(data.results) 
      console.log(data.results)
    }
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchMovies()
    }, [])
  
    
    const hadleTitel = (c) => {
      console.log(c)
    }
  
    const items = content.map((c) => (
      <Link to={`./film/${ c.id }`}>
        <div className="carrouselItem" onClick={() =>hadleTitel(c.id)}>
          
            <img
              src={`https://image.tmdb.org/t/p/w500/${c.backdrop_path}?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4`}
              alt=""
              onDragStart={handleDragStart}
              className="carrouselItem__img"
            />
        </div>
      </Link>
    ));
  
  
  
  
    return (
      <AliceCarousel disableDotsControls responsive={responsive} mouseTracking items={items} infinite autoPlay autoPlayInterval="2000" disableButtonsControls />
    );
};
