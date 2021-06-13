import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

// Input => data: []
// Input => columns: []
// Input => sortColumn: {}
// Output => onSort: []
const Table = ({data, columns, sortColumn, onSort}) => {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>
    );
}

Table.prototype = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}

export default Table;