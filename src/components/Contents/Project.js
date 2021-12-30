import React from 'react';
import { Container, ProjectLink, Projecth3, ProjectLabel } from '../styles/Project.styled';

const Project = (props) => {

    return (
            <Container>
                <ProjectLink href={props.data.html_url} target="_blank"><Projecth3>Project Name : {props.data.full_name}</Projecth3></ProjectLink>

                <h4><ProjectLabel>Description : </ProjectLabel>{props.data.description} </h4>
                <p><ProjectLabel>Language : </ProjectLabel>  {props.data.language}</p>
                <p><ProjectLabel>Star Count : </ProjectLabel>  {props.data.stargazers_count}</p>
                <span><ProjectLabel>Created Date : </ProjectLabel>  {props.data.created_at}</span>
            </Container>

    );
}

export default Project;