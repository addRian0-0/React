import React, { useMemo, useState } from 'react';
import "../01-useState/counter.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { increment } = useCounter(5000);
    const [show, setshow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado, [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                + 1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setshow(!show)
                }}
            >
                Show | Hide ({JSON.stringify(show)})
            </button>

        </div>
    )
}
