import React from 'react'

import './index.css'


interface Items {
    title: string;
    items: number[];
}

const App = (props: Items) => {
    return (
        <>
        <div className="w-fit px-4 py-2 rounded-sm bg-violet-500 text-white text-2xl select-nonecursor-pointer">{props.title}!</div>
        <ul>
            {props.items.map(item => <li>Number {item}</li>)}
        </ul>
        </>
    );
}

export default App;
