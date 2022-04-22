import React, { Component, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';

const url = "https://ghibliapi.herokuapp.com/films/"

function FilmDetails() {
    const [film, setFilm] = useState();
    const filmId = useParams().id
    useEffect(() =>{
        fetch(url + filmId)
            .then((res) => res.json())
            .then((res) => {
                setFilm(res)
                console.log(res)
    })
    .catch((error =>{
        console.error(error);
    })
    )
    },[])

    return(
        <div className='film-details'>
              <div className='banner'><img src={film? film.movie_banner : ""} height={400} alt="banner"/></div>
              <div className='title'><b>Title: </b>{film? film.title : ""}</div>
              <div className='ogTitle'><b>Original Title: </b>{film? film.original_title : ""}</div>
              <div className='ogTitleRomanized'><b>Original Title Romanized: </b>{film? film.original_title_romanised : ""}</div>
              <div className='director'><b>Director: </b>{film? film.director : ""}</div>
              <div className='producer'><b>Producer: </b>{film? film.producer : ""}</div>
              <div className='releaseDate'><b>Release Date: </b>{film? film.release_date : ""}</div>
              <div className='rtScore'><b>Rotten Tomatoes Score: </b>{film? film.rt_score : ""}</div>
              <div className='runTime'><b>Run Time: </b>{film? film.running_time: ""}</div>
              <div className='description'><b>Synopsis: </b>{film? film.description : ""}</div>
        </div>
    )

}
export default FilmDetails;

