import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'pink',
};

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeStyle={activeStyle}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
