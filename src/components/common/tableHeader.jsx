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

    render() { 
        const { columns } = this.props;
        return ( 
            <thead>
                <tr>
                    {
                        columns.map(column => (
                            <th 
                                key={column.label || column.key}
                                onClick={() => this.raisedSort(column.path)}>
                                {column.label}
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