import { useState, useEffect, Component } from 'react';
// import React, { Component } from 'react';
// import React from 'react';
// import { useParams } from "react-router-dom"

// const studioURL = "https://ghibliapi.herokuapp.com/films/<id>"
// const FilmCard = ({ filmcard, setFilmCard}) => {
//     useEffect(() =>{
//         const url = `${studioURL}${id}.json`
//     })
// }

// class FilmCard extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name: [],
//             title: [],
//             image: [],
//             banner: [],
//             director: [],
//             producer: [],
//             release: [],
//             runTime: [],
//             rtScore: [],
//             description: [],
//             isLoaded: false,
//         }

//     }
//     componentDidMount(){
//         fetch('https://ghibliapi.herokuapp.com/films')
//         .then(res =>res.json())
//         .then(json => {
//             this.setState({
//                 isLoaded: true,
//                 items: json,
//             })
//         });


//     }

//     render(){

//         const { isLoaded, name } = this.state
//         if (!isLoaded){
//             return(<div>Loading...</div>)
//         }
//         else{
//             return(
//                 <div>
//                     <ul>
//                        {name.map(name =>(
//                            <li key={name.id}>
//                                {item.name}
//                            </li>
//                        ))};
//                     </ul>
//                 </div>
//             )
//         }


        
//     }

// }
// export default FilmCard;







class FilmCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            items: [],
            
        }
    }



    async componentDidMount(){
        const url = 'https://ghibliapi.herokuapp.com/films';
        const response = await fetch(url)
        const data = await response.json();
        // const filmData = response.map((e) => {})
       
        this.setState({items: data})
    }
    

    render(){
        return(
        <div>
            {this.state.loading ? <div>loading...</div> : <div>{'title'}</div>}
            {this.state.items ? this.state.items.map(film => {
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
                )
            }):'no information yet'}
            
        </div>
        
        
        )
    }




}
export default FilmCard;