import React from 'react';
import About from './Contents/About';
import Experience from './Contents/Experience';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Interests from './Contents/Interests';
import Awards from './Contents/Awards';




const Content = () =>{

    return(
        <div className='Content'>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Awards />

        </div>
    );
    
}
export default Content;
