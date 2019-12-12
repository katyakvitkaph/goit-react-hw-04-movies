import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data, onGoBack }) => {
  return (
    <article>
      <h2>{`${data.title}(${new Date(data.release_date).getFullYear()})`}</h2>
      <p>User Score: {data.popularity}%</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
      />
      <h3>Overview</h3>
      <p>{data.overview}</p>
      <h4>Genres</h4>
      {data.genres.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button onClick={onGoBack} type="button">
        Back
      </button>
    </article>
  );
};
Article.propTypes = {
  onGoBack: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default Article;
