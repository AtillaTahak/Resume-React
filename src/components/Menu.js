import React from 'react';
import img from '../img/img.jpg';
import { Menus, MenusUl, MenusUlLi, MenusUlLiA, MobileMenus } from './styles/Menus.styled'



export const Menu = () => {
    return (
        <>
            <Menus>
                <MenusUl>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="about" spy={true} smooth={true} duration={1000}><img className="profilePhoto" src={img} alt='empty' /></MenusUlLiA></MenusUlLi>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="experience" spy={true} smooth={true} duration={1000}>EXPERIENCE</MenusUlLiA></MenusUlLi>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="education" spy={true} smooth={true} duration={1000}>EDUCATION</MenusUlLiA></MenusUlLi>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="skills" spy={true} smooth={true} duration={1000}>SKILLS</MenusUlLiA></MenusUlLi>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="interests" spy={true} smooth={true} duration={1000}>INTERESTS</MenusUlLiA></MenusUlLi>
                    <MenusUlLi><MenusUlLiA activeClass='active' to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</MenusUlLiA></MenusUlLi>
                </MenusUl>
            </Menus>
            <MobileMenus>

            </MobileMenus>
        </>
    );

}

export default Menu;
