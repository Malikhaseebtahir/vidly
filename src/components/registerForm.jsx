import React, { Component } from 'react';

class Register extends Component {
    state = { 
        account: { email: '', password: '', name: '' }
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account })
    }

    render() { 
        const { account } = this.state;
        
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input 
                        value={account.email} 
                        name="email"
                        type="text" 
                        onChange={this.handleChange}
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input 
                        value={account.password}
                        name="password"
                        onChange={this.handleChange} 
                        type="password" 
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input 
                        value={account.name}
                        name="name"
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control" />
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
        );
    }
}
 
export default Register;