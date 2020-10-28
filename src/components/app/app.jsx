import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";


const App = (props) => {
  const {headMovieSettings} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen headMovieSettings={headMovieSettings}/>
        </Route>
        <Route path="/login" exact>
          <SignInScreen/>
        </Route>
        <Route path="/films/:id" exact component={FilmScreen} />
        <Route path="/films/:id/review" exact component={AddReviewScreen} />
        <Route path="/mylist" exact>
          <MyListScreen/>
        </Route>
        <Route path="/player/:id" exact>
          <PlayerScreen/>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Страница не найдена</small>
              </h1>
              <Link to="/">На главную</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  headMovieSettings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;

