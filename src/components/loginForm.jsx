import React, { Component } from 'react';
import joi from 'joi';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }

    schema = joi.object({
        username: joi.string().required().label('Username'),
        password: joi.string().required().label('Password')
    })


    validate = () => {
        const result = this.schema.validate(this.state.account, {abortEarly: false});

        const errors = {};
        if (!result.error) return;

        result.error.details.map(error => errors[error.path[0]] = error.message);

        return errors;
    }

    handleLogin = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        // Call the server
        console.log('Submit');
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required'
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Username is required'
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() {
        const  { account, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <Input
                        label="Username"
                        name="username"
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        label="Password"
                        name="password"
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button disabled={this.validate()} className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;