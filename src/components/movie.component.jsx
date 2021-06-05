import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { pagination } from '../utils/pagination';
import Pagination from './common/pagination.component';
import ListGroup from './common/ListGroup';
import MoviesTable from './moviesTable.component';
import _ from 'lodash';

class Movie extends Component {
    state = { 
        selectedGenre: {},
        genres: [],
        movies: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres' } ,...getGenres()]

        this.setState({ movies: getMovies(), genres: genres });
    }

    handleDeleteMovie = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLikeToggle = movie => {
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].like = !movies[index].like;

        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    render() {
        const { length: count } = this.state.movies;
        const { 
            pageSize, 
            currentPage, 
            movies: allMovies, 
            selectedGenre,
            sortColumn 
        } = this.state;
        
        if (count === 0)
            return <p>No movie available in the database</p>

        const filtered = 
            selectedGenre && selectedGenre._id ? 
            allMovies.filter(m => m.genre._id === selectedGenre._id) : 
            allMovies;

        const sortedMovies = _.orderBy(
                filtered, 
                [sortColumn.path], 
                [sortColumn.order])
            
        const movies = pagination(sortedMovies, currentPage, pageSize);

        return (
            <>
                <div className="row">
                    <div className="col-lg-3">
                        <ListGroup 
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}/>
                    </div>
                    <div className="col-lg-9">
                        <p>Currently we have {filtered.length} in our stock</p>
                        <MoviesTable 
                            movies={movies}
                            onLike={this.handleLikeToggle}
                            onDelete={this.handleDeleteMovie}
                            onSort={this.handleSort} 
                            sortColumn={sortColumn}/>
                        
                        <Pagination
                            totalCount={filtered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            pageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Movie;