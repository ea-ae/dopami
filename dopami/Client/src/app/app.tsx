import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './app.css';


alert('app');

const App = () => {
    const footerLinks = ['About', 'Contact', 'Terms', 'Privacy'];
    const linkStyle = 'mx-9 my-3 px-1 font-roboto-mono text-gray-600 hover:text-gray-500 text-sm no-underline cursor-default';

    return (
        <>
            <p>one</p>
            <p>two</p>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

