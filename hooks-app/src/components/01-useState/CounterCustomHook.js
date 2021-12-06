import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import "./counter.css";

export const CounterCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(50);

    return (
        <>
            <h1>Counter with Hook: {state} </h1>
            <hr />
            <button
                onClick={reset}
                className="btn btn-primary" >
                Reset
            </button>
            <button onClick={() => increment(5)}
                className="btn btn-primary" >
                + 5
            </button>
            <button onClick={() => decrement(5)}
                className="btn btn-primary" >
                - 5
            </button>
        </>
    )
}
