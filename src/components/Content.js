import React from 'react';
import About from './Contents/About';
import Experience from './Contents/Experience';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Interests from './Contents/Interests';
import Awards from './Contents/Awards';




const Content = () =>{

    const info ={
        about:{
            name:"Atilla Taha",
            surname:"Kördüğüm",
            adress:"48100 MENTEŞE · TURKEY/MUGLA · 248.STEET ·+90543-499-56-37",
            mail:"atillatahaa@gmail.com",
            describe:"Hi friends! I'm a full-stack developer specializing in using HTML,CSS,JavaScript,Asp.Net MVC to build software solutions for small businesses. Also, I built a Qr menu system for restaurants and an automated system for hospitals",
            socialLink:[
                "https://www.linkedin.com/in/atilla-taha-kördüğüm/",
                'https://twitter.com/atillatahaa',
                'https://www.youtube.com/channel/UCmoD0x4Z9vdG2PCsI5p8FYg',
                'https://github.com/AtillaTahak/'
            ]
        },
        experience:{
            
        }
    }

    return(
        <div className='Content'>
            <About 
            data={info.about} />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Awards />

        </div>
    );
    
}
export default Content;
