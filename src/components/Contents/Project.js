import React, {useEffect} from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import {projectAction} from '../Redux/Projects/ReduxProject'



export const Awards = () => {
    const projectsState = useSelector(state =>state.project);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(projectAction());
    }, [])
    return (
        <div>
            {projectsState.data.map((e)=>{console.log(e.name)})}

        </div>
    );

}

export default Awards;
