import React, {useState} from "react";


const SearchBox = () =>{
const [searchInput, setSearchInput] = useState("");
const filmTitles = [
    { name: "Castle in the Sky" },
    { name: "Grave of the Fireflies" },
    { name: "My Neighbor Totoro" },
    { name: "Kiki's Delivery Service" },
    { name: "Only Yesterday" },
    { name: "Porco Rosso" },
    { name: "Pompoko" },
    { name: "Whisper of the Heart" },
    { name: "Princess Mononoke" },
    { name: "My Neighbors the Yamadas" },
    { name: "Spirited Away" },
    { name: "The Cat Returns" },
    { name: "Howl's Moving Castle" },
    { name: "Tales from Earthsea" },
    { name: "Ponyo" },
    { name: "Arrietty" },
    { name: "From Up on Poppy Hill" },
    { name: "The Wind Rises" },
    { name: "The Tale of the Princess Kaguya" },
    { name: "When Marnie Was There" },
    { name: "The Red Turtle" },
    { name: "Earwig and the Witch" },

];

const handleChange = (e) =>{
    e.preventDefault();
    setSearchInput(e.target.value);
    
};
if (searchInput.length > 0){
    filmTitles.filter((title) =>{
        return(title.name.match(searchInput)
        
    )});
}
return <div className="input-form">
            <input type='search' 
            placeholder="type film title here" 
            onChange={handleChange} 
            value={searchInput}/>
            <button type="submit" onChange={e => setSearchInput(e.target.value)}>click here :D</button>      
            
        </div>


}
export default SearchBox;