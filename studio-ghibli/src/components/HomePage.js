import React from "react";
import FilmCard from "./FilmCard";

const HomePage = (props) =>{
    console.log(props.data)
   return(
       <div>
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
