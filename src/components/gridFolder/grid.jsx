import { useState } from 'react'
import Cells from '../cellsFolder/cells'
import "./style.css"

const generateColors = () => {
    const rgbColors = []
    for (let i = 0; i < 25; i++) {
        
        let firstColor = Math.floor(Math.random()*256)
        let secondColor = Math.floor(Math.random()*256)
        let thirdColor = Math.floor(Math.random()*256)

        rgbColors.push(`rgb(${firstColor},${secondColor},${thirdColor})`)
    }
    return rgbColors
}



function Grid() {
    const [rgbColors, setRgbColors] = useState(generateColors())
    const [currentInterval, changeInterval] = useState(0)

    const handleClick = () => {
        clearInterval(currentInterval)
        let interval = setInterval(() => setRgbColors(generateColors()), 500)
        changeInterval(interval) 
    }

    const handleStop = () => {
        clearInterval(currentInterval)
        changeInterval(0);
    }

    return (
        <div className='gridContainer'>
            <div className='grid'>
                {rgbColors.map(color => <Cells color={color} key={color}>Cell</Cells>)}
            </div>
            <button onClick={handleClick}>Im a Button</button>
            <button onclick={handleStop}>Stop the wild dancing</button>
        </div>
    )
}

export default Grid