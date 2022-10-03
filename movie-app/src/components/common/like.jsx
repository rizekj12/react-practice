import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons'



const Like = props => {
        let classes = faHeartActive
        if(!props.liked) classes = faHeartInactive
    return ( 
        <>
        <FontAwesomeIcon onClick={props.onClick} style={{ cursor: 'pointer'}} icon={classes} />
        </>
     );
}
 
export default Like;

