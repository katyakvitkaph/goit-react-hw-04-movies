import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import * as Api from '../../services/api';
import Article from '../../components/Article';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import NavDetails from '../../components/NavDetails';

const getIdFromProps = props => props.match.params.id;

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  static propTypes = {
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape({ url: PropTypes.string }).isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    Api.fetchMoviesWithId(id).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    this.props.history.push('/');
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
        {movie && <Article data={movie.data} onGoBack={this.handleGoBack} />}
        <NavDetails url={match.url} />
        <Switch>
          <Route path="/movies/:id/cast" component={Cast} />
          <Route path="/movies/:id/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
