import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import {login, logout, isLoggedIn} from '../utils/Auth';
import '../App.css';
import {fakeAuth} from '../../index';
import login from '../login/login';
import { ToastContainer, toast } from 'react-toastify';

class Header extends Component{
    constructor(){
        super();
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout() {
        fakeAuth.isAuthenticated = false;
        toast.dismiss();
        toast.success('You have successfully logged out!.');
    }

    render(){
        return (
            <div>
            <nav className="navbar navbar-default">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Chuck Norris World</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Food Jokes</Link>
              </li>
              <li>
                {
                    (fakeAuth.isAuthenticated ?<Link to="/special">Celebrity Jokes</Link>: '')
                }
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
             <li>
             {
             (fakeAuth.isAuthenticated) ? ( <Link to ='/'><button className="btn btn-danger log" onClick={this.onLogout()}>Log out </button></Link> ) : ( <Link to ='/login'><button className="btn btn-info log">Log In </button></Link> )
             }
             </li>    
             <li>
             {
             (!fakeAuth.isAuthenticated && <Link to ='/signup'><button className="btn btn-info log"> Sign Up </button></Link> )
             }
             </li>  
            </ul>
          </nav>
          </div>
        )
    }
}

export default Header;