import React, { Component } from 'react';
import _ from 'lodash';

// Input => itemCount: number
// Input => pageSize: number
// Input => currentPage: number
// Output => onPageChange: func
class Pagination extends Component {
    state = {  }
    render() { 
        const { itemCount, pageSize, onPageChange, currentPage } = this.props;
        const pageCount = Math.ceil(itemCount / pageSize);
        
        if (pageCount === 1) return null;

        const pages = _.range(1, pageCount + 1);

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    { pages.map(page => 
                        <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                            <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;