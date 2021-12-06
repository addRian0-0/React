import React, { useState } from 'react';
import { Multiple } from "../03-examples/Multiple";
import "../01-useState/counter.css";

export const RealRef = () => {

    const [show, setshow] = useState(false);

    return (
        <div>
            <h1>Real example useRef</h1>
            <hr />

            {show && <Multiple />}

            <button
                className="btn btn-primary"
                onClick={() => {
                    setshow(!show)
                }}
            >
                Show | Hide
            </button>

        </div>
    )
}
