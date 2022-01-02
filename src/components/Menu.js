import React from 'react';
import img from '../img/img.jpg';
import { Menus, MenusUl, MenusUlLi, MenusUlLiA, MobileMenus, MobileMenusUl,MobileMenuBtn } from './styles/Menus.styled'
import { BsBorderWidth } from "react-icons/bs";




export const Menu = (props) => {
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
                <div>
                <h1>{props.data.about.name}</h1>
                    <MobileMenusUl open={props.open}>
                        <li><MenusUlLiA activeClass='active' to="experience" spy={true} smooth={true} duration={1000}>EXPERIENCE</MenusUlLiA></li>
                        <li><MenusUlLiA activeClass='active' to="education" spy={true} smooth={true} duration={1000}>EDUCATION</MenusUlLiA></li>
                        <li><MenusUlLiA activeClass='active' to="skills" spy={true} smooth={true} duration={1000}>SKILLS</MenusUlLiA></li>
                        <li><MenusUlLiA activeClass='active' to="interests" spy={true} smooth={true} duration={1000}>INTERESTS</MenusUlLiA></li>
                        <li><MenusUlLiA activeClass='active' to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</MenusUlLiA></li>

                    </MobileMenusUl>
                </div>
                <div>
                <MobileMenuBtn type='button' open={props.open} onClick={()=>props.setOpen(!props.open)}><BsBorderWidth size="2.3rem" /></MobileMenuBtn> 
                </div>
        


            </MobileMenus>
        </>
    );

}

export default Menu;
