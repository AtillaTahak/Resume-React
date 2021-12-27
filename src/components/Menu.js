import React from 'react';
import img from '../img/img.jpg';
import {Menus, MenusUl, MenusUlLi} from '../styles/Menus.styled'
export const Menu = () =>{


    return(
        <Menus>
            <MenusUl>
                <MenusUlLi><img className="profilePhoto" src={img} alt='empty'/></MenusUlLi>
                <MenusUlLi><a>EXPERIENCE</a></MenusUlLi>
                <MenusUlLi><a>EDUCATION</a></MenusUlLi>
                <MenusUlLi><a>SKILLS</a></MenusUlLi>
                <MenusUlLi><a>INTERESTS</a></MenusUlLi>
                <MenusUlLi><a>AWARDS</a></MenusUlLi>
            </MenusUl>
        </Menus>
    );

}

export default Menu;
