import React from "react";
import Header from "./Header"
import { useState, useEffect } from 'react';
import FilmDetails from "./FilmDetails";
import film from "./FilmDetails";
import items from "./FilmDetails"
import FilmCard from "./FilmCard";
import SearchBox from "./SearchBox";



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
                      <FilmCard film={film}/>
               )})
           }
       </div>
   )
    
}
export default HomePage;
