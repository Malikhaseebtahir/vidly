import React from 'react';

const MovieDetails = ({ match, history }) => {
    return ( 
        <>
            <h1>Movie Details - {match.params.id}</h1> 
            <button onClick={() => history.replace('/movies')}>save</button>
        </>
    );
}
 
export default MovieDetails;