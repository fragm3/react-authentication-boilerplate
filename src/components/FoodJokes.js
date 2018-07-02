import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './structure/Header';
import Footer from './structure/Footer';
import Navigation from './structure/Navigation';
import {fakeAuth} from '../index';

import axios from 'axios';
import obj from '../global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {getFoodData} from './utils/chucknorris-api';
const BASE_URL = obj.dataapiURL;

class FoodJokes extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
    this.getFoodJokes.bind(this);
  }

  getFoodJokes() {
      debugger;
      const url = BASE_URL+"api/jokes/food";
      axios.get(url).then(response => response.data).then((jokes) => {
      this.setState({ jokes });
    });
  }

  // getFoodJokes() {
  //   debugger;
  //   getFoodData().then((jokes) => {
  //     this.setState({ jokes });
  //   });
  //   debugger;
  // }

  componentDidMount() {
    this.getFoodJokes();
  }

  render() {

    const { jokes }  = this.state;
    debugger;
    console.log(jokes)
    return (
      <div>
        <div className="nav-container">
        <Header />
        {/* <Navigation /> */}
        <h3 className="text-center">Chuck Norris Food Jokes</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          {/* { isLoggedIn() ? */}
          {fakeAuth.isAuthenticated ? 
          <div className="jumbotron text-center">
            <h2>View Celebrity Jokes</h2>
            <Link className="btn btn-lg btn-success" to='/special'> Celebrity Jokes </Link>
          </div> : <div className="jumbotron text-center"><h2>Get Access to Celebrity Jokes By Logging In</h2></div>
          }
        </div>
        {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default FoodJokes;