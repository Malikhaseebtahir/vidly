import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Input => items: {},
// Output => onItemSelect: func
class ListGroup extends Component {
    render() { 
        const { 
            items, 
            valueProperty, 
            textProperty, 
            selectedGenre,
            onItemSelect } = this.props;

        return ( 
            <ul className="list-group">
                { items.map(item => 
                    <li 
                        key={item[valueProperty]} 
                        className={ selectedGenre === item ? 'list-group-item active' : 'list-group-item' }
                        onClick={() => onItemSelect(item)}>
                        {item[textProperty]}
                    </li>
                )}
            </ul> 
        );
    }
}

ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}

ListGroup.propTypes = {
    onItemSelect: PropTypes.func.isRequired
}
 
export default ListGroup;