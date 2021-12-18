import React from 'react';
import img from '../img.jpg';

export const Menu = () =>{


    return(
        <nav>
            <ul>
                <li><img className="profilePhoto" src={img}/></li>
                <li><a>EXPERIENCE</a></li>
                <li><a>EDUCATION</a></li>
                <li><a>SKILLS</a></li>
                <li><a>INTERESTS</a></li>
                <li><a>AWARDS</a></li>
            </ul>
        </nav>
    );

}

export default Menu;
