import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coorsds, setcoorsds] = useState({ x: 0, y: 0 })
    const { x, y } = coorsds;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setcoorsds(coors);
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial nwn</h3>
            <p>
                x: {x} ---
                y: {y}
            </p>
        </div>
    )
}
