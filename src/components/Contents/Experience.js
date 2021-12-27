import React from 'react';
import { Content, Cards, CardsDate, SubHeading, CardDetails } from '../styles/Experience.styled'
import { Titlespan } from '../styles/About.styled'

export const Experience = () => {
    return (
        <>
            <hr />
            <Content>
                <h1>Experience</h1>
                <Cards>
                    <CardsDate>
                        02, 2015– Present
                    </CardsDate>
                    <CardDetails>
                        <h3>Full-stack Web Development </h3>
                        <SubHeading>as a Freelance</SubHeading>
                        <p>
                            Mastered intermediate and advanced topics in full-stack development
                            (including Rails, Git, and DS&A challenges)
                            while building multiple full-stack projects
                            both independently and via pair-programming.

                        </p>
                        <p>
                            <Titlespan>Newspapers</Titlespan> — Created a web app for newspapers & İncreased read rates by 80%.
                            <br />
                            ● Built with: HTML5, CSS3, Wordpress, PHP, MySQL
                        </p>
                        <p>
                            <Titlespan>Hospital automation</Titlespan>  — Built an internal dashboard to help track doctors & achieved 100% success in
                            what proportion of doctors’ salaries will be given.
                            <br />
                            ● Built with: Bootstrap, HTML5,CSS3, Asp.net Mvc, MsSQL
                        </p>
                        <p>

                            <Titlespan>Car Washing</Titlespan> — Built a web app to track car washing companies & achieved 100% success in what
                            proportion of car washing companies.
                            <br />
                            ● Built with: JQuery, Asp.net, MsSQL
                        </p>
                        <p>
                            <Titlespan>Qr Menu for restaurant</Titlespan> — Build a web app to show the menu with Qr code & Online increased sales by 20% during the pandemic.
                            <br />
                            ● Built with:JQuery, Asp.net, MsSQL
                        </p>
                    </CardDetails>
                </Cards>
            </Content>
        </>

    );

}

export default Experience;
