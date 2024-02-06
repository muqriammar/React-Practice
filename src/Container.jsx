
export function Container (){

   const handleClick = () => {
    alert("Hello");
   }
   
    return (
        <>
        <div className="main-container">
            <img src="src\images\photo.png"></img>
            <h1>Hello</h1>
            <div className="button-row">
            <button className="accept-button" onClick={handleClick}>Yes</button>
            <button className="decline-button" onClick={handleClick}>No</button>
            </div>
        </div>
        </>
    )
}