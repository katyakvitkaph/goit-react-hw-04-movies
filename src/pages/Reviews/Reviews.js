import React, { Component } from 'react';
import * as Api from '../../services/api';

const getIdFromProps = props => props.match.params.id;

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    Api.fetchReviews(id).then(resData => {
      this.setState({ reviews: resData.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    // console.log(cast);
    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(item => (
              <li key={item.id}>
                <p>Author: {item.author}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>not found</div>
        )}
      </div>
    );
  }
}

export default Reviews;
