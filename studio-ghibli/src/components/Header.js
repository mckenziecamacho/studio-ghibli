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
                {/* <img src='https://64.media.tumblr.com/0372fb45e6f5db49ab38536fe9ef8aef/9cffd9b5949c7973-ae/s540x810/d336820bb4020fd43e97299ce672539bb94092f8.jpg' alt=''/> */}
                </Link>
                {/* <Link to='/filmdetails'>
                    <h1>filmdetails</h1>
                 </Link> */}
                 <Link to='/about'>
                     <h1>About</h1>
                 </Link>
             </nav>
        </header>
        
            
    </div>
    )
}
export default Header;