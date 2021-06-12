import React from 'react';

// Input => liked: boolean
// Output => onclick: func
const Like = ({ liked, onClick }) => {
    let classes = 'fa fa-heart';
    if (!liked ) { classes += '-o'; }

    return ( 
        <span>
            <i className={classes} onClick={() => onClick(liked)}></i>
        </span>
    )
}
 
export default Like;