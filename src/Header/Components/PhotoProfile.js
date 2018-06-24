import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'

class PhotoProfile extends Component {
  render() {
    return (
      <img class="photoProfile" src={this.props.url} />
    );
  }
}

PhotoProfile.propTypes = {};

export default hot(module)(PhotoProfile);


