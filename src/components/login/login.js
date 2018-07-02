import React, {Component} from 'react';
import './login.css';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import CONST from '../../global';
import {fakeAuth} from '../../index'
import {Redirect} from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import Button from './login-button';

class Login extends Component {

	constructor(props) {
		super(props);
			this.state = {email: '',
										password: '',
										redirectToHome: false,
										passwordError: true,
										passwordScore: -1,
										passwordStrength: '',
										passwordError: true,
										isEmail: false,
										emailError: true,
										validForm: false
									};
				this.emailErrorMessage = '';
				this.passwordErrorMessage = '';
        this.handleChange = this.handleChange.bind(this);
				this.handlePassword = this.handlePassword.bind(this);
				this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.login = this.login.bind(this);
	}



	login(){
		let obj = {email : this.state.email, password : this.state.password};
		let self = this;
		if(!this.state.passwordError && this.state.emailError){
		axios.post(CONST.apiBaseURL+'api/login', obj)
		  .then(function (response) {
		    console.log(response);
		    if(response.data.status==200){
		    	toast.dismiss();
					localStorage.setItem('user', JSON.stringify(response.data));
					toast.dismiss();
					toast.success('You have successfully login!.');
					fakeAuth.authenticate();
					self.props.history.push('/')
		    }
		    else{
		    	toast.dismiss();
		    	toast.error(response.data.message);
		    	// self.state.password = '';
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
			});
		}
	}
    
    handleChange(event) {
			//this.setState({email: event.target.value});
      this.setState({email: event.target.value.trim()});
      let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
      this.state.isEmail = validEmail;
			this.state.emailError = !(this.state.email || validEmail);

			if (this.state.emailError) {
				this.emailErrorMessage = 'Enter a valid Email Address';
				this.setState({validForm: false})
			}
			this.setState({validForm: true})
    }
    handlePassword(event) {
			this.setState({password: event.target.value});
      let validPassword = this.state.password.length >= 6;
      this.state.passwordError = !(this.state.password && validPassword);
      if(this.state.passwordError){
				this.passwordErrorMessage = 'The password is less than 6 character';
				this.setState({validForm: false})
			}
			this.setState({validForm: true})
    }
    
    handleKeyPress = (event) => {
	  if(event.key == 'Enter'){
	    this.login();
		  }
	}

	handleChangeEvent(event) {
		if(event.target.name === 'email'){
			this.setState({email: event.target.value.trim()});
      let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
      this.state.isEmail = validEmail;
			this.state.emailError = !(this.state.email && validEmail);

			if (this.state.emailError) {
				this.emailErrorMessage = 'Enter a valid Email Address';
				this.setState({validForm: false})
			}
			this.setState({validForm: true})
		}
		else if (event.target.name === 'password'){
			this.setState({password: event.target.value});
      let validPassword = this.state.password.length >= 6;
      this.state.passwordError = !(this.state.password && validPassword);
      if(this.state.passwordError){
				this.passwordErrorMessage = 'The password is less than 6 character';
				this.setState({validForm: false})
			}
			this.setState({validForm: true})
		}

		if(!this.state.emailError && this.state.passwordError){
			this.emailErrorMessage = 'Enter a valid Email Address';
			this.passwordErrorMessage = 'Minimum 6 characters required';
		}

		else if(this.state.emailError){
			this.emailErrorMessage = 'Enter a valid Email Address'
		}

		else if(this.state.passwordError){
			this.emailErrorMessage = '';
			this.passwordErrorMessage = 'Minimum 6 characters required';
		}
		else{
			this.emailErrorMessage = '';
      this.passwordErrorMessage = '';
		}
		
	}

	render(){
		const { redirectToHome } = this.state

    if (redirectToHome === true) {
      return <Redirect to='/' />
    }
		return (
				<div class="container">
				    <div class="row">
				        <div class="col-md-offset-5 col-md-3">
				            <div class="form-login">
				            <h4>Login.</h4>
				            <input type="text" value={this.state.email} //handlechangeevent
        onChange={this.handleChangeEvent} id="userName" name="email" class="form-control input-sm chat-input" placeholder="username" />
											{this.state.emailError && (
												<p className = "error-message">
												{this.emailErrorMessage}
												</p>
											)
										}
				            <br/>
				            <input type="password" value={this.state.password} //handlepassword
        						onChange={this.handleChangeEvent} name="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" onKeyPress={this.handleKeyPress}/>
										{this.state.passwordError && (
												<p className = "error-message">
												{this.passwordErrorMessage}
												</p>
											)
										}
				            <br/>
				            <div class="wrapper">
				            <span class="group-btn">     
				                <a onClick={this.login} class="btn btn-primary btn-md">Login <i class="fa fa-sign-in"></i></a>
												{/* <Button onClick={this.login} disabled={this.state.disabled} /> */}
										</span>
				            </div>
				            </div>
				        
				        </div>
				    </div>
				</div>
		);
	}
}

export default Login;