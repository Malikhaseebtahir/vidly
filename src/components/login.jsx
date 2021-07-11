import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' }
    }

    handleLogin = e => {
        console.log('e => ', e);
        e.preventDefault();

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
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username" 
                            type="text" 
                            name="username"
                            className="form-control"
                            onChange={this.handleChange} 
                            value={account.username} 
                            autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            value={account.password}
                            onChange={this.handleChange}
                            id="password" 
                            name="password"
                            type="text" 
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;