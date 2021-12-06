import React, { useRef } from 'react';
import "../01-useState/counter.css";

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                ref={inputRef}
                className="form-control"
                placeholder="addRian0-0"
            />

            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}