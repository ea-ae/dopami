import React from 'react'
import ReactDOM from 'react-dom'

import Prism from 'prismjs'
import 'prism-themes/themes/prism-one-dark.css'
import 'prismjs/themes/prism-tomorrow.css'

import App from './app'
import './index.css'


Prism.highlightAll();

const title = 'Dopami';

// ReactDOM.render(
//     <App title={title} items={numbers} />,
//     document.getElementById('app')
// );
