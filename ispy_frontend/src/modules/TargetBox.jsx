import { useState } from "react"

function TargetBox({ coords }) {

    const boxSize = 50

    const { x, y } = coords
    const boxStyle = {
        position: 'absolute',
        top: `${y - boxSize / 2}px`,
        left: `${x - boxSize / 2}px`,
        borderRadius: '30px',
        border: '3px solid rgb(200, 7, 7)',
        width: `${boxSize}px`,
        height: `${boxSize}px`

    }

    return (
        <>
            <div style={boxStyle}>
            </div>
        </>
    ) 
}

export default TargetBox