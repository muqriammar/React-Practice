import React, { useState } from 'react';
import {motion} from "framer-motion"



export function Container ({onButtonClick}){
    const [buttonPressed, setButtonPressed] = useState(false)

    const handleButtonClick = () => {
        setButtonPressed(true);
    }

   const handleClick = () => {
    alert("Hello")
   }

   
    return (
        <>
        <div className="main-container">
            <img src='/photo.png'/>
            <h1>Will you be my Valentine?</h1>
            <div className="button-row">
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale:0.9}} className="accept-button" onClick={onButtonClick}>Yes</motion.button>
            {!buttonPressed && (
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale:0.9}} className="decline-button" onClick={handleButtonClick}>No</motion.button>
            )}
            
            </div>
        </div>
        </>
    )
}