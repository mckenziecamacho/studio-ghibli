import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
    <div>
    <header className='header'>
        <div className='new'><h1>Studio Ghibli Films</h1></div>
            <nav className='navbar'>
                <Link to="/home">
                <h1>Home</h1>
                </Link>
                <div className='search-box'>
                    <Link to='/search'>
                        <h1>Search</h1>
                    </Link>
                 </div>
                 <div className='about'> 
                    <Link to='/about'>
                     <h1>About</h1>
                 </Link>
                
                 </div>
             </nav>
        </header>
        
            
    </div>
    )
}
export default Header;