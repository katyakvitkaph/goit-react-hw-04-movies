import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ films = [] }) => {
  return (
    <ul>
      {films.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MovieList;
