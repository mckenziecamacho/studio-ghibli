import { Link } from 'react-router-dom';

function FilmCard ({film}){
    return(
        <div className="film-images">
            <Link to={"/film-details/" + film.id}><img src={film.image} height={300}/>{}</Link>
        </div>
    )
}
export default FilmCard;