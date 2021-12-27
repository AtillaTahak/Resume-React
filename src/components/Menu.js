import React from 'react';
import img from '../img/img.jpg';
import {Menus, MenusUl, MenusUlLi} from './styles/Menus.styled'
export const Menu = () =>{


    return(
        <Menus>
            <MenusUl>
                <MenusUlLi><img className="profilePhoto" src={img} alt='empty'/></MenusUlLi>
                <MenusUlLi><a href="#experience">EXPERIENCE</a></MenusUlLi>
                <MenusUlLi><a href="#education">EDUCATION</a></MenusUlLi>
                <MenusUlLi><a href="#skills">SKILLS</a></MenusUlLi>
                <MenusUlLi><a href="#interests">INTERESTS</a></MenusUlLi>
                <MenusUlLi><a href="#awards">AWARDS</a></MenusUlLi>
            </MenusUl>
        </Menus>
    );

}

export default Menu;
