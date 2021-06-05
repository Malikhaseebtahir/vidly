import React from 'react';

const ListGroup = (props) => {
    const { 
        items, 
        valueProperty, 
        textProperty, 
        onItemSelect, 
        selectedItem 
    } = props;

    return (
        <ul className="list-group">
            { items.map(item => (
                <li
                    onClick={() => onItemSelect(item)} 
                    key={item[valueProperty] ? item[valueProperty] : 1111} 
                    className={ selectedItem === item ? 'list-group-item active' : 'list-group-item' }>
                    { item[textProperty] }
                </li>
            ))}
        </ul>
    )
}

ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name'
}

export default ListGroup;