import React from 'react';
import { Content } from '../styles/Interests.styled'
import { Markup } from 'interweave';


export const Interests = (props) => {
    return (
        <>
        <hr/>
            <Content id='interests'>
              <h3>INTERESTS</h3>
               <span>
                   <Markup content={props.data}/> 
               </span>

            </Content>
            <hr/>

        </>
    );

}

export default Interests;
