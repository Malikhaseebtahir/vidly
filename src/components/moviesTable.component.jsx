import React, { Component } from 'react';
import Like  from './common/like.component';

class MoviesTable extends Component {
    
    raisedSort = path => {
        let sortColumn = {...this.props.sortColumn};

        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn);
    }
    
    render() {
        
        const { movies, onLike, onDelete } = this.props;
        
        return ( 
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.raisedSort('title')}>Title</th>
                        <th onClick={() => this.raisedSort('genre.name')}>Genre</th>
                        <th onClick={() => this.raisedSort('stock')}>Stock</th>
                        <th onClick={() => this.raisedSort('rate')}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    movie={movie}
                                    onClick={() => onLike(movie)}
                                />
                            </td>
                            <td>
                                <button 
                                    onClick={() => onDelete(movie)}
                                    className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        );    
    }
}
 
export default MoviesTable;
