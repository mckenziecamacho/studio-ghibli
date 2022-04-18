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
//                 items: [],
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






// fetch('https://ghibliapi.herokuapp.com/films')
// .then(res => {console.log(res.json())
// .then(data =>console.log(data))

class FilmCard extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
                // filmID: [],
                title: [],
                // originalTitle: [],
                // romanizedTitle: [],
                // director: [],
                // image: [],
                // banner: [],
                // producer: [],
                // release: [],
                // runTime: [],
                // rtScore: [],
                // description: [],

            
        }
    }



    async componentDidMount(){
        const url = 'https://ghibliapi.herokuapp.com/films';
        const response = await fetch(url)
        const data = await response.json();
        // const filmData = response.map((e) => {})
        console.log(data);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.data]: e.target.value
        })
    }

    render(){
        return(
        <div>
            {this.state.loading ? <div>loading...</div> : <div>{'name'}</div>}
        </div>)
    }




}
export default FilmCard;