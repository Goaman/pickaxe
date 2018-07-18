import React from 'react'
import {createStore, combineReducers} from 'redux'
import { hot } from 'react-hot-loader'
import Header from '../Header/Header.js'
import ElementList from './ElementList.js'
import elements from "./elements.js"

// const userReducer = (state={name: "nicolas", age: 25}, action) => {
//   if (action.type === "CHANGE-AGE") {
//     state.name = action.playload;
//   }
//   return state;
// };
//
// const tweetsReducers = (state={}, action) => {
//
// };

//const reducers = combineReducers({user: userReducer})

// const reducer = (state = {}, action) => {
//   if (action.type === "TEST") {
//
//   }
// };

// const store = createStore(reducer, 0);

// store.subscribe(()=>{
//   console.log("store changed", store.getState())
// });





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: elements,
      links: [
        {id: "google", label: "g", url: "https://www.google.be/search?q="},
        {id: "pinterest", label: "p", url: "https://www.pinterest.com/search/pins/?q="},
        {id: "youtube", label: "y", url: "https://www.youtube.com/results?search_query="},
      ],
      search: ""
    } ;
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
      <div class="app">
        <Header onSearch={this.onSearch}></Header>
        <ElementList elements={this.state.elements} links={this.state.links} search={this.state.search} />
      </div>
    );
  }
}

App.propTypes = {};

export default hot(module)(App)
