import './layout/styles.styl';
import App from './layout/App'
const React = require("react");
const ReactDom = require("react-dom");



const element = document.createElement("div");
document.body.appendChild(element);
ReactDom.render(<App />, element);

