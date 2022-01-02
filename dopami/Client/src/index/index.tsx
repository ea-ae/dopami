import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './register';
// import Footer from './footer';
import './index.css';

alert('index');

ReactDOM.render(
    <Register />,
    document.getElementById('code')
);

// ReactDOM.render(
//     <BrowserRouter>
//         <Footer />
//     </BrowserRouter>,
//     document.getElementById('footer')
// );
