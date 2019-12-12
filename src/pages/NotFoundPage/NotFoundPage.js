import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Такая страница не найдена</h2>
      <p>
        Вернуться на домашнюю страницу: <NavLink to="/"> HOME </NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
