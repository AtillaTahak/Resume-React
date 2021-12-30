import React from 'react';
import { Content, Cards, CardsDate, SubHeading, CardDetails } from '../styles/Experience.styled'
import { Markup } from 'interweave';

export const Education = (props) => {
    return (
        <>
            <hr />
            <Content id='education'>
                <h1>EDUCATION</h1>
                {props.data.map(e => (
                    <Cards key={e.id}>
                        <CardsDate>
                            {e.date}
                        </CardsDate>
                        <CardDetails>

                            <h3>{e.name}</h3>
                            <SubHeading>{e.subHead}</SubHeading>
                            <p>
                                <Markup content={e.describe} />
                            </p>
                        </CardDetails>
                    </Cards>

                ))}
            </Content>
        </>
    );

}

export default Education;
