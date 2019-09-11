import React, { Component } from 'react';
import './css/index.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config.js';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      images: [],
      code: [],
      plants: [],
      architecture: [],
      loading: true
    };
  }

  componentDidMount() { 
    this.performSearch("");
    this.performSearch("code");
    this.performSearch("bike");
    this.performSearch("gym");
  }

  performSearch = (query = 'code') => {
    this.setState({ loading: true });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          if (query === "code") {
                this.setState({ code: response.data.photos.photo, loading: false});
          } else if (query === "bike") {
                this.setState({ bike: response.data.photos.photo, loading: false});
          } else if (query === "gym") {
                this.setState({ gym: response.data.photos.photo, loading: false});
          } else {
                this.setState({
                  images: response.data.photos.photo,
                  searchTerm: query,
                  loading: false
                });
          }
      })
      .catch(error => {console.log("Error getting data", error)});
  }

render () {
    return (
      <BrowserRouter basename="/hetes">
        <div className="container">
          <h2 className="main-title">Searching Images</h2>
          <Header />
            {
                (this.state.loading)
                ? <p>Loading...</p>
                : 
            <Switch>
              <Route exact path="/" render={props => <Home {...props} onSearch={this.performSearch} />} />
              <Route path="/search/:topic" render={ () => <Gallery title={this.state.searchTerm} data={this.state.images} />} />
              <Route exact path="/code" render={ () => <Gallery title="Code" data={this.state.code} /> } />
              <Route exact path="/bike" render={ () => <Gallery title="Bike" data={this.state.bike} /> } />
              <Route exact path="/gym" render={ () => <Gallery title="Gym" data={this.state.gym} /> } />
              <Route component={NotFound} />
            </Switch>
            }
        </div>
      </BrowserRouter>
    );
  }
}