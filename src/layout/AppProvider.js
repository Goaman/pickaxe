import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'
import App from './app'



class AppProvider extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppProvider.propTypes = {};

export default hot(module)(AppProvider);
