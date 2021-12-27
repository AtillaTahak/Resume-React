import React from 'react';
import img from '../img/img.jpg';
import {Menus, MenusUl, MenusUlLi, MenusUlLiA} from './styles/Menus.styled'
export const Menu = () =>{


    return(
        <Menus>
            <MenusUl>
                <MenusUlLi><img className="profilePhoto" src={img} alt='empty'/></MenusUlLi>
                <MenusUlLi><MenusUlLiA href="#experience">EXPERIENCE</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA href="#education">EDUCATION</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA href="#skills">SKILLS</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA href="#interests">INTERESTS</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA href="#awards">AWARDS</MenusUlLiA></MenusUlLi>
            </MenusUl>
        </Menus>
    );

}

export default Menu;
