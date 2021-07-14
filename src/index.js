/*
* NOTE: The code in index.js is transformed before being delivered to the browser.
*       That's why you can do things like import a css file or use a wacky <App />
*       tag.
*
* Main takeaway: This is the first file to be executed in the app.
*/

import ReactDOM from 'react-dom'; //import ReactDOM from the react-dom 3rd party library
//NOTE: react & react-dom are two dependencies that together form the React library.

import './index.css'; //include the css file in the overall application
import App from './App'; //App.js; you can & should omit the '.js'

// render takes two arguments...
ReactDOM.render(<App />, document.getElementById('root'));
// 1. replace 2nd argument with 1st argument, in this case, App
// 2 .the div with the 'root' id is where all the code is appended to /public/index.html
