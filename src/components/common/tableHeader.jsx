import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Input => columns: []
// Input => sortColumn: {}
// Ouput => onSort: func
class TableHeader extends Component {
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

    renderSortIcon = column => {
        const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) return null;
        
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-desc"></i>
        return <i className="fa fa-sort-asc"></i>
    }

    render() { 
        const { columns } = this.props;
        return ( 
            <thead>
                <tr>
                    {
                        columns.map(column => (
                            <th 
                                className="clickable"
                                key={column.label || column.key}
                                onClick={() => this.raisedSort(column.path)}>
                                {column.label} {this.renderSortIcon(column)}
                            </th>   
                        ))
                    }
                </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    columns: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}
 
export default TableHeader;