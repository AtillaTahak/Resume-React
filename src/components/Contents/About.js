import React from 'react';
import { Context, Title, Titlespan, Adress, Description,SocialLink,TitleA } from '../styles/About.styled'





export const About = () => {
    return (
        <Context id='about'>
            <Title>Atilla Taha  <Titlespan>Kördüğüm</Titlespan></Title>
            <Adress> 48100 MENTEŞE · TURKEY/MUGLA · 248.STEET ·+90543-499-56-37 ·<TitleA href='mailto:atillatahaa@gmail.com'>ATİLLATAHAA@GMAİL.COM</TitleA> </Adress>
            <Description>Hi friends! I'm a full-stack developer specializing in using HTML,CSS,JavaScript,Asp.Net MVC to build software solutions for small businesses. Also, I built a Qr menu system for restaurants and an automated system for hospitals</Description>
            <div>
                <SocialLink className='my-social-icon' bgColor="#6c757d" url='https://www.linkedin.com/in/atilla-taha-kördüğüm/' />
                <SocialLink className='my-social-icon' bgColor="#6c757d" url='https://twitter.com/atillatahaa' />
                <SocialLink className='my-social-icon' bgColor="#6c757d" url='https://www.youtube.com/channel/UCmoD0x4Z9vdG2PCsI5p8FYg' />
                <SocialLink className='my-social-icon' bgColor="#6c757d" url='https://github.com/AtillaTahak/' />
            </div>
        </Context>
    );

}


export default About;
