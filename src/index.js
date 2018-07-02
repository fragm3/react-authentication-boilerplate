import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/login'
import Signup from './components/signup/signup'
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

const Root = () => {
    return (
            <Router>
                <div className="container">
                <ToastContainer autoClose={2000}/>
                <Route exact path="/" component={FoodJokes}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute path="/special" component={CelebrityJokes}/>
                </div>
            </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));