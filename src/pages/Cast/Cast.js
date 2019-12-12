import React, { Component } from 'react';
import * as Api from '../../services/api';

const getIdFromProps = props => props.match.params.id;

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    Api.fetchCast(id).then(resData =>
      this.setState({ cast: resData.data.cast }),
    );
  }

  render() {
    const { cast } = this.state;
    // console.log(cast);
    return (
      <div>
        <ul>
          {cast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
