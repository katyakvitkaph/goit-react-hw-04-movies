import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavDetails = ({ url }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

NavDetails.propTypes = {
  url: PropTypes.string.isRequired,
};
export default NavDetails;
