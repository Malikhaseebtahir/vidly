import React from 'react';
import joi from 'joi';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = joi.object({
        username: joi.string().required().label('Username'),
        password: joi.string().required().label('Password')
    })
    
    doSomething() {
        // Call the server
        console.log('Submit');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    {this.renderInput('Username', 'username')}
                    {this.renderInput('Password', 'password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;