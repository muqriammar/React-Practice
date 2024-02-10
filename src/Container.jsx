import React, { useState } from 'react';



export function Container (){
    const [buttonPressed, setButtonPressed] = useState(false)

    const handleButtonClick = () => {
        setButtonPressed(true);
    }

   const handleClick = () => {
    alert("Hello");
   }

   
    return (
        <>
        <div className="main-container">
            <img src="src\images\photo.png"></img>
            <h1>Will you be my Valentine?</h1>
            <div className="button-row">
            <button className="accept-button" onClick={handleClick}>Yes</button>
            {!buttonPressed && (
                <button className="decline-button" onClick={handleButtonClick}>No</button>
            )}
            
            </div>
        </div>
        </>
    )
}