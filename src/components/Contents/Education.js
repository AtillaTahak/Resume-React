import React from 'react';
import { Content, Cards, CardsDate, SubHeading, CardDetails } from '../styles/Experience.styled'
import { Titlespan } from '../styles/About.styled'

export const Education = () => {
    return (
        <>
            <hr />
            <Content id='experience'>
                <Cards>
                    <CardsDate>
                        October, 2021– June, 2022
                    </CardsDate>
                    <CardDetails>
                        <h1>EDUCATION</h1>

                        <h3>MICROVERSE </h3>
                        <SubHeading>Remote Full Stack Web Development Program, Full Time</SubHeading>
                        <p>
                            ● Spent 1300+ hours mastering algorithms, data structures, and full-stack development while<br/>
                            simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.
                            ● Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.
                        </p>
                    </CardDetails>
                </Cards>
                <Cards>
                    <CardsDate>
                        October, 2021– June, 2022
                    </CardsDate>
                    <CardDetails>
                        <h3>Atatürk University </h3>
                        <SubHeading>Computer Programming</SubHeading>
                        <p>
                            ● GPA: 3.23
                        </p>
                    </CardDetails>
                </Cards>
            </Content>
        </>
    );

}

export default Education;
