import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import './index.css'


const title = 'world'

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);
