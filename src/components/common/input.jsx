import React from 'react';
import PropTypes from 'prop-types'

// Input => label: string, name: string, value: string
// Output => onChange : func
const Input = ({ label, name, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control" />
            { error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

Input.prototype = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
 
export default Input;