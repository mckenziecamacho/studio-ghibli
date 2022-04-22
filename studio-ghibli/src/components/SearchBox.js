import React, {useState} from "react";
import FilmCard from "./FilmCard";

function SearchBox(props){
    const [searchTerm, setSearchTerm] = useState('');
    console.log(props.data)
    return(
        <div className="search">
            <div className="input-box">
            <input type="text" placeholder="Search film titles here..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
            {props.data.filter((val) => {
                if (searchTerm == ''){
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) =>{
                console.log(val)
                return(
                    <FilmCard film={val}/>
                )
            })}
        </div>
    )
}
export default SearchBox;

