import React from 'react';
import About from './Contents/About';
import Experience from './Contents/Experience';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Interests from './Contents/Interests';
import Projects from './Contents/Projects';




const Content = (props) => {
    return (
        <div className='Content'>
            <About
                data={props.data.about} />
            <Experience
                data={props.data.experience} />
            <Education
                data={props.data.education} />
            <Skills />
            <Interests
                data={props.data.interests} />
            <Projects />

        </div>
    );

}
export default Content;
