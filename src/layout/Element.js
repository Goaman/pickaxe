import React from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'
import Links from './Links'

class Element extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log("render element", this.props)
    return (
      <div className={"li"}>
        <Links links={this.props.links} search={this.props.search}/>
        <div className="elementName"><strong>{this.props.name}</strong> {this.props.search}</div>
      </div>
    );
  }
}

Element.propTypes = {};

export default hot(module)(Element);
