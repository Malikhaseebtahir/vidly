import React from 'react';
import PropTypes from 'prop-types'

// Input => label: string, name: string, value: string
// Output => onChange : func
const Input = ({ label, name, value, error, onChange }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                id={name} 
                type="text" 
                name={name}
                className="form-control"
                onChange={onChange} 
                value={value}/>
            { error && <div className="alert alert-danger">{label} name is required</div>}
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