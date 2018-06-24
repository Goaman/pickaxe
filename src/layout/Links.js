import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'

class Links extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.links.map( (link)=> {
          return <a key={link.id} href={link.url + this.props.search || "#"}>{link.label}</a>
        })}
      </Fragment>
    );
  }
}

Links.propTypes = {};

export default hot(module)(Links);

