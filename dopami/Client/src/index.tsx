import React from 'react'
import ReactDOM from 'react-dom'

import Prism from 'prismjs'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-cpp.min.js'
import 'prism-themes/themes/prism-one-dark.css'
//import 'prismjs/themes/prism-tomorrow.css'

// import App from './app'
import './index.css'


console.log('vvv');
console.log(Prism.languages);
Prism.highlightAll();

const title = 'Dopami';

// ReactDOM.render(
//     <App title={title} items={numbers} />,
//     document.getElementById('app')
// );
