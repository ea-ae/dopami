import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import './index.css'


const title = 'Click'

const numbers = [1, 2, 4, 8, 16]

ReactDOM.render(
    <App title={title} items={numbers} />,
    document.getElementById('app')
);
