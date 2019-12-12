import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:id" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />

      {/* <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
