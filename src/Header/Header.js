import React from 'react'
import {createStore, combineReducers} from 'redux'
import LinksButton from "./Components/LinksButton"
import PhotoProfile from "./Components/PhotoProfile"
import { hot } from 'react-hot-loader'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={"header"}>
      <div className="logo">Pickhaxe</div>
      <div className={"header-wrapper"}>
        <input type={"text"} onKeyUp={this.props.onSearch} placeholder={"Search" } />
      </div>
      {/*<LinksButton />*/}
      {/*<PhotoProfile url={"https://i.pinimg.com/280x280_RS/62/2c/97/622c972b3b984f770205dae8d386f141.jpg"}/>*/}
    </div>;
  }
}


export default hot(module)(Header);
