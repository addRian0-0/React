import React, { useCallback, useState } from 'react';
import "../01-useState/counter.css";
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);
    /* const increment = () => {
        setcounter(counter + 1);
    } */

    const increment = useCallback((num) => {
        setcounter(c => c + num);
    }, [setcounter])

    return (
        <div>

            <h1>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
}
