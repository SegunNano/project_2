import './ColorBox.css'
import { useState } from "react";
export default function ColorBox({ colors }) {
    const randIdx = Math.floor(Math.random() * colors.length);
    const [bgColor, setBgColor] = useState(colors[randIdx])
    const styles = { backgroundColor: bgColor }
    function changeBgColor() {
        let randColorIdx = Math.floor(Math.random() * colors.length);
        while (colors[randColorIdx] === bgColor) {
            randColorIdx = Math.floor(Math.random() * colors.length)
        }
        setBgColor(colors[randColorIdx])
    }
    return (
        <div onClick={changeBgColor} style={styles} className='ColorBox'></div>
    )
} 