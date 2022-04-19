import React from "react";

function SearchBar({placeholder, data }) {
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
    
    return(
        <div className="search">
            <div className="search-inputs"></div>
            <input type="text" placeholder="text"/>
            <div className="search-icon"> </div>
            <div className="data-results"></div>
        </div>
    )
}
export default SearchBar;