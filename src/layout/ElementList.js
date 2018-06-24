import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'
import Element from './Element.js'

class ElementList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log("this.props", this.props);
    return (
      <div className={"list"}>
        {this.props.elements.map( (element) => {
          if (element.type == "element") {
            return (<Element key={element.name}
                             name={element.name}
                             search={this.props.search}
                             links={this.props.links} />);
          }
          else {
            return <div className={"separator"}></div>
          }
        })}
      </div>
    );
  }
}

ElementList.propTypes = {};

export default hot(module)(ElementList);
