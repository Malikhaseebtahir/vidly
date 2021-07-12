import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
    };

    validate = () => {
        const result = this.schema.validate(this.state.data, {abortEarly: false});
        const errors = {};
        if (!result.error) return;

        result.error.details.map(error => errors[error.path[0]] = error.message);

        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required'
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required'
        }
    }

    handleLogin = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSomething();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    renderInput(label, name, type = 'text') {
        const  { data, errors } = this.state;
        return (
            <Input
                type={type}
                label={label}
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );     
    }

    renderButton(label) {
        return (
            <button 
                disabled={this.validate()} 
                className="btn btn-primary">
                    {label}
                </button>
        );
    }
}
 
export default Form;