import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {headMovieSettings} = props;
  return <React.Fragment>
    <MainScreen headMovieSettings={headMovieSettings}/>
  </React.Fragment>;
};

App.propTypes = {
  headMovieSettings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;

