import React from 'react';
import img from '../img/img.jpg';
import { Menus, MenusUl, MenusUlLi, MenusUlLiA } from './styles/Menus.styled'
import { animateScroll as scrollSpy} from 'react-scroll'


export const Menu = () => {
    console.log(scrollSpy)
    return (
        <Menus>
            <MenusUl>
                <MenusUlLi><MenusUlLiA activeClass='active' to="about" spy={true} smooth={true} duration={1000}><img className="profilePhoto" src={img} alt='empty' /></MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA activeClass='active' to="experience" spy={true} smooth={true} duration={1000}>EXPERIENCE</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA activeClass='active' to="education" spy={true} smooth={true} duration={1000}>EDUCATION</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA activeClass='active' to="skills" spy={true} smooth={true} duration={1000}>SKILLS</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA activeClass='active' to="interests" spy={true} smooth={true} duration={1000}>INTERESTS</MenusUlLiA></MenusUlLi>
                <MenusUlLi><MenusUlLiA activeClass='active' to="awards" spy={true}smooth={true} duration={1000}>AWARDS</MenusUlLiA></MenusUlLi>
            </MenusUl>
        </Menus>
    );

}

export default Menu;
