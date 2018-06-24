import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'

class LinksButton extends Component {
  render() {
    return (
      <div className={"linksButton"}>
        Links
      </div>
    );
  }
}

LinksButton.propTypes = {};

export default hot(module)(LinksButton);
