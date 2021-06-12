import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4,
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].like = !movies[index].like;
        this.setState({ movies });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    render() { 
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, movies: allMovies } = this.state;

        const movies = paginate(allMovies, currentPage, pageSize)

        if (count === 0) return <p>Sorry currently we have no movies</p>
        return (
            <>
                <p>We have {count} movies available</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>   
                            <th>Genre</th>   
                            <th>Stock</th>   
                            <th>Rating</th>   
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { movies.map(movie => 
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like 
                                        liked={movie.like}
                                        onClick={() => this.handleLike(movie)}/>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Pagination 
                    itemCount={count} 
                    pageSize={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}/>
            </> 
        );
    }
}
 
export default Movies;