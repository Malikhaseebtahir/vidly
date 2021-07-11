import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        error: {}
    }

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if (account.username.trim() === '')
            errors.username = "Username is required";
        if (account.password.trim() === '')
            errors.password = "Password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleLogin = e => {
        e.preventDefault();

        const error = this.validate();
        console.log(error);
        this.setState({ error });
        if (error) return;

        // Call the server
        console.log('Submit');
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() { 
        const  { account } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <Input
                        label="Username"
                        name="username"
                        value={account.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        label="Password"
                        name="password"
                        value={account.password}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;