import React from 'react';
import { SubHeading } from '../styles/Experience.styled'
import { FaJs, FaReact, FaReacteurope, 
    FaHtml5, FaCss3Alt, FaPhp, FaSlackHash, 
    FaGit, FaGithub, FaMobileAlt, FaChrome } from "react-icons/fa";
import { DiJqueryUiLogo, DiRuby, DiMysql, DiDotnet } from "react-icons/di";
import {Content, LiFont} from '../styles/Skills.styled'




export const Skills = () => {
    return (
        <>
        <hr/>
            <Content id='skills'>
                <h2>Skills</h2>
                <SubHeading>PROGRAMMING LANGUAGES& TOOLS</SubHeading>
                <ul>
                    <LiFont>Front-End: <FaJs />, <FaReact />, <FaReacteurope />, <DiJqueryUiLogo />, <FaHtml5 />, <FaCss3Alt /></LiFont>
                    <LiFont>Back-End: <DiRuby />, <DiMysql />, <FaSlackHash />, <DiDotnet />, <DiMysql />, <FaPhp /></LiFont>
                    <LiFont>Tools & Methods: <FaGit />, <FaGithub />, <FaMobileAlt />, <FaChrome /></LiFont>
                    <LiFont>Professional: Remote pair-programming, Teamwork, Mentoring, Freelancer</LiFont>
                </ul>

            </Content>
        </>
    );

}

export default Skills;
