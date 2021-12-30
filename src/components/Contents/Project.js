import React from 'react';

const Project = (props) => {

    return (
        <div>
            <a href={props.data.html_url}><h3>Project Name : {props.data.full_name}</h3></a>
            <p> Description : {props.data.description}</p>
            <p> Language : {props.data.language}</p>
            <p> Star Count : {props.data.stargazers_count}</p>
            <span> Created Date: {props.data.created_at}</span>


        </div>
    );
}

export default Project;