import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "./layout.css";

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const ptag = useRef();
    const [boxSize, setboxSize] = useState();

    useLayoutEffect(() => {
        setboxSize(ptag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right" >
                <p ref={ptag}
                    className=""
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                onClick={increment}
                className="btn btn-primary" >
                Siguiente quote
            </button>

        </div>
    )
}
