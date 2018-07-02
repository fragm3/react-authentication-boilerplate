import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './structure/Navigation';
import Header from './structure/Header';
import Footer from './structure/Footer';
import { getCelebrityData } from '../utils/chucknorris-api';
import axios from 'axios';
import obj from '../global';
const BASE_URL = obj.dataapiURL;

class CelebrityJokes extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
      const url = BASE_URL+"api/jokes/celebrity";
      axios.get(url).then(response => response.data).then((jokes) => {
      this.setState({ jokes });
  })
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  render() {

    const { jokes } = this.state;

    return (
      <div>
        <Header />
        {/* <Navigation /> */}
        <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>View Food Jokes</h2>
            <Link className="btn btn-lg btn-success" to='/'>Chuck Norris Food Jokes </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default CelebrityJokes;