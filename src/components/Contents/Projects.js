import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectAction } from '../Redux/Projects/ReduxProject'
import Project from './Project'
import {Container} from '../styles/Projects.styled';


export const Projects = () => {
    const projectsState = useSelector(state => state.project);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projectAction());
    }, [dispatch])
    return (
        <Container id='projects'>
            {projectsState.data.map((e) => (
                <Project key={e.id} data={e} />
            )
            )}
        </Container>
    );

}

export default Projects;
