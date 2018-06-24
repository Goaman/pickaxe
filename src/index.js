import './layout/styles.styl';
import AppProvider from './layout/AppProvider'
const React = require("react");
const ReactDom = require("react-dom");



const element = document.createElement("div");
document.body.appendChild(element);
ReactDom.render(<AppProvider />, element);

