import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
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

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPagedData() {
        const { 
            currentPage, 
            pageSize, 
            movies: allMovies, 
            selectedGenre,
            sortColumn } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre.name === selectedGenre.name)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, movies };
    }

    render() { 
        const { length: count } = this.state.movies;
        const { 
            currentPage, 
            pageSize, 
            genres, 
            sortColumn } = this.state;

        const { totalCount, movies } = this.getPagedData();

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
                        <p>We have {totalCount} movies available</p>
                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                        />
                        <Pagination 
                            itemCount={totalCount} 
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