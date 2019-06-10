import React, { Component } from 'react'

import './Login.css'



class Login extends Component {
    constructor(){
        super();

        this.state={
            email:'',
            password:''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInput(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]:value
        });

    }

    handleLogin(e){
        e.preventDefault();
        console.log("You are logged in as:");
        console.log(this.state);
        alert(`You are logged in as: \n 
           UserName: ${this.state.email} \n 
           Password: ${this.state.password}`)
    }
  render () {
    return (
        <div className="login-form">
        <div className="login-container">
            <div className="login-body ">
                <form action="#" onSubmit={this.handleLogin}>
                    <h1>Welcome</h1>
                    <input class="login-input" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInput} />
                    <input class="login-input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInput} />
                    <a href="#">Forgot password?</a>
                    <button>Log In</button>
                    <span>or login with</span>
                    <div class="login-social">
                        <a href="#" className="login-social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" className="login-social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" className="login-social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
  }
}

export default Login