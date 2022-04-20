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
           {
               props.data.map(film =>{
                   return(
                       <div>
                           <img src={film.image}/>
                           
                       </div>
                   )
               })
           }



           {/* this.state.items.map(film => {
                console.log(film.title)
                return(
                    <div>
                        <p>{film.title}</p>
                        <p>{film.originalTitle}</p>
                        <p>{film.romanizedTitle}</p>
                        <p>{film.director}</p>
                        <p>{film.image}</p>
                        <p>{film.banner}</p>
                        <p>{film.producer}</p>
                        <p>{film.release}</p>
                        <p>{film.runTime}</p>
                        <p>{film.rtScore}</p>
                        <p>{film.description}</p>
                    </div>
                ) */}
       </div>
   )
    
}
export default HomePage;
