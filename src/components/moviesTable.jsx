import React, {Component} from 'react';
import Like from './common/like';

class MoviesTable extends Component {
    raisedSort = (path) => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn);
    }
    render() {
        const { movies, onDelete, onLike } = this.props;
        return ( 
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={() => this.raisedSort('title')}>Title</th>   
                            <th onClick={() => this.raisedSort('genre.name')}>Genre</th>   
                            <th onClick={() => this.raisedSort('numberInStock')}>Stock</th>   
                            <th onClick={() => this.raisedSort('dailyRentalRate')}>Rating</th>   
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
                                        onClick={() => onLike(movie)}/>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onDelete(movie)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default MoviesTable;