import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './register';
// import Footer from './footer';
import './index.css';


ReactDOM.render(
    <pre className='m-3 tracking-tight leading-6 font-roboto-mono text-md focus:outline-0'>
        <code className='select-none cursor-default text-md language-py'>
            <Register />
        </code>
    </pre>,
    document.getElementById('code')
);

// ReactDOM.render(
//     <BrowserRouter>
//         <Footer />
//     </BrowserRouter>,
//     document.getElementById('footer')
// );
