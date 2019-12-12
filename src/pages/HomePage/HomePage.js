import React, { Component } from 'react';

import * as Api from '../../services/api';
// import MoviesPage from '../MoviesPage/MoviesPage';
import MovieList from '../../components/MovieList';

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    Api.fetchPopularMovies().then(response => {
      this.setState({ films: response.data.results });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <h1>The Weekly Trends</h1>
        <MovieList films={films} />
      </div>
    );
  }
}

export default HomePage;
