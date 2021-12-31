import { title } from 'process';
import React, { useState } from 'react'

import './index.css'


const ListNumber = ({num}: {num: number}) => {
    const [state, setState] = useState(num);
    return (
        <li className="select-none" onClick={() => setState(state + 1)}>Number {state}</li>
    );
}

interface Items {
    title: string;
    items: number[];
}

const App = (props: Items) => {
    let {title, items} = props;
    return (
        <>
        <div className="w-fit px-4 py-2 rounded-sm bg-violet-500 text-white text-2xl select-none cursor-pointer">{title}!</div>
        <ul>
            {items.map(item => <ListNumber num={item} />)}
        </ul>
        </>
    );
}

export default App;
