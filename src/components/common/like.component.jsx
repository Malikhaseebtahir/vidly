import React from 'react';

const Like = (props) => {    
    const { movie, onClick } = props;
    
    let classes = 'fa fa-heart';
    if (movie.like) classes += '-o' 
    
    return (
        <i 
            className={classes}
            onClick={() => onClick(movie)}></i>
    );
}
 
export default Like;