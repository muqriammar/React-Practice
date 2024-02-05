export function Container (){
   const handleClick = () => {
    alert("Hello");
   }
   
    return (
        <>
        <div className="main-container">
            <img src="src\images\photo.png"></img>
            <h1>Hello</h1>
            <button onClick={handleClick}>Click me</button>

        </div>
        </>
    )
}