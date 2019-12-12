import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as API from '../../services/api';
import Search from '../../components/Search';

class MoviePage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;

    const currentSearch = new URLSearchParams(location.search).get('search');

    if (!currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'search',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');

    if (prevSearch === currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  fetchFilms = q => {
    API.searchMovies(q).then(res =>
      this.setState({ movies: res.data.results }),
    );
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;
    // eslint-disable-next-line react/prop-types
    history.push({
      ...location,
      search: `?search=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Search onSubmit={this.onSearchSubmit} />
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/show/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviePage;
