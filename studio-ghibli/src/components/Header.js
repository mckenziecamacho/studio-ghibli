import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const Header = () => {
    return(
    <div>
        <header className='header'>
            <nav className='navbar'>
                <Link to="/home">
                <h1>Home</h1>
                </Link>
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