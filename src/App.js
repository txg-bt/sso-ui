import React from 'react';
import PropTypes from 'prop-types';
import { setPathPrefix } from './pathPrefix';
import Login from './containers/Login';
import { Routes, Route, generatePath } from 'react-router-dom';
import Register from './containers/Register';

const App = ({ path, previousRoute, setToken }) => {
  const cleanPath = generatePath(path);
  setPathPrefix(cleanPath);

  return (
    <Routes>
      <Route
        path={``}
        element={<Login previousRoute={previousRoute} setToken={setToken} />}
      ></Route>

      <Route
        path={`/register`}
        element={<Register previousRoute={previousRoute} setToken={setToken} />}
      ></Route>
    </Routes>
  );
};

App.propTypes = {
  path: PropTypes.string.isRequired,
  previousRoute: PropTypes.string,
  setToken: PropTypes.func.isRequired,
};

App.defaultProps = {
  previousRoute: '/',
};

export default App;
