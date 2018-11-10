import './layout/styles.styl';
import App from './layout/app'
const React = require("react");
const ReactDom = require("react-dom");



const element = document.createElement("div");
document.body.appendChild(element);
ReactDom.render(<App />, element);

