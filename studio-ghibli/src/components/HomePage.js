import React from "react";
import Header from "./Header"
import { useState, useEffect } from 'react';
import FilmDetails from "./FilmDetails";
import film from "./FilmDetails";
import items from "./FilmDetails"
import { Link } from 'react-router-dom';



const HomePage = (props) =>{
    console.log(props.data)
   return(
       <div>
           <div className="hp-header">
               <h1>
                   Studio Ghibli Films
               </h1>
           </div>
           {
               props.data.map(film =>{
                   return(
                       <div className="film-images">
                           <Link to={"/film-details/" + film.id}><img src={film.image} height={300}/>{}</Link>
                       </div>
                   )
               })
           }
       </div>
   )
    
}
export default HomePage;
