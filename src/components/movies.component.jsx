import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    }

    componentDidMount() {
        const genres = [{name: 'All Genres'}, ...getGenres()];
        this.setState({ genres: genres, movies: getMovies() })
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

    handleGenreSelection = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    render() { 
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, movies: allMovies, genres, selectedGenre } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre.name === selectedGenre.name)
            : allMovies;

        const movies = paginate(filtered, currentPage, pageSize)

        if (count === 0) return <p>Sorry currently we have no movies</p>
        return (
            <>
                <div className="row">
                    <div className="col-lg-3">
                        <ListGroup 
                            items={genres}
                            selectedGenre={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelection}/>                       
                    </div>
                    <div className="col-lg-9">
                        <p>We have {filtered.length} movies available</p>
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
                            itemCount={filtered.length} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}/>                        
                    </div>
                </div>
            </> 
        );
    }
}
 
export default Movies;