import React, { Component } from 'react';
import joi from 'joi';
import Form from './common/form';

class Register extends Form {
    state = { 
        data: { email: '', password: '', name: '' },
        errors: {}
    }

    schema = joi.object({
        email: joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: joi.string().min(3).max(5).required().label('Password'),
        name: joi.string().required().label('Name')
    });
    
    doSomething() {
        console.log('submit');
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('Email', 'email', 'email')}
                {this.renderInput('Password', 'password', 'password')}
                {this.renderInput('Name', 'name')}
                {this.renderButton('Register')}
            </form>
        );
    }
}
 
export default Register;