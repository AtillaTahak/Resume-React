import React from 'react';
import About from './Contents/About';
import Experience from './Contents/Experience';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Interests from './Contents/Interests';
import Awards from './Contents/Awards';
import info from './data/data'




const Content = () => {
    return (
        <div className='Content'>
            <About
                data={info.about} />
            <Experience
                data={info.experience} />
            <Education
                data={info.education} />
            <Skills />
            <Interests
                data={info.interests} />
            <Awards />

        </div>
    );

}
export default Content;
