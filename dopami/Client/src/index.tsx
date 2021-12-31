import React from 'react'
import ReactDOM from 'react-dom'

import Prism from 'prismjs'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
//import 'prismjs/components/prism-c'
//import 'prismjs/components/prism-cpp'
//import 'prismjs/components/prism-python.min.js'
import 'prism-themes/themes/prism-one-dark.css'
//import 'prismjs/themes/prism-tomorrow.css'

// import App from './app'
import './index.css'


Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/';
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'remove-trailing': true,
});

console.log('vvv');
console.log(Prism.languages);
Prism.highlightAll();

const title = 'Dopami';

// ReactDOM.render(
//     <App title={title} items={numbers} />,
//     document.getElementById('app')
// );
