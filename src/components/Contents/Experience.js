import React from 'react';
import { Content, Cards, CardsDate, SubHeading, CardDetails } from '../styles/Experience.styled'
import { Titlespan } from '../styles/About.styled'

export const Experience = (props) => {
    return (
        <>
            <hr />
            <Content id='experience'>
                <Cards>
                    <CardsDate>
                        02, 2015– Present
                    </CardsDate>
                    <CardDetails>
                        <h1>Experience</h1>

                        <h3>{props.data.firstHead} </h3>
                        <SubHeading>{props.data.subHeading}</SubHeading>
                        <p>
                            {props.data.describe}
                        </p>
                        {props.data.jobs.map(e => (
                            <p key={e.id}>
                                <Titlespan>{e.name}</Titlespan>
                                {e.subdescribe}
                                <br />
                                {e.built}
                            </p>

                        ))}
                    </CardDetails>
                </Cards>
            </Content>
        </>

    );

}

export default Experience;
