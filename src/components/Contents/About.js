import React from 'react';
import { Context, Title, Titlespan, Adress, Description, SocialLink, TitleA } from '../styles/About.styled'





export const About = (props) => {
    return (
        <Context id='about'>
            <Title>{props.data.name}  <Titlespan>{props.data.surname}</Titlespan></Title>
            <Adress> {props.data.adress}·<TitleA href={props.data.mail}>{props.data.mail}</TitleA> </Adress>
            <Description>{props.data.describe}</Description>
            <div>
                {props.data.socialLink.map(element => (
                    <SocialLink key={Math.random()} className='my-social-icon' bgColor="#6c757d" url={element} />
                ))}
            </div>
        </Context>
    );

}


export default About;
