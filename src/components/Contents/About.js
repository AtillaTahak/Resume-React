import React from 'react';
import styled from 'styled-components'
import {Context} from '../styles/About.styled'




export const About = () => {
    return (
        <Context>
            <Title>Atilla Taha  <Titlecolor>Kördüğüm</Titlecolor></Title>

        </Context>
    );

}


const Title = styled.h1`
line-height: 1;
`
const Titlecolor = styled.span`
color: #bd5d38;
`


export default About;
