export function Message({openModal}) {

  const test = () => {
    console.log("This event works")
  }
  return (
    <div className="main-container">
      <div className="envelope-container">
        <input id="flap" type="checkbox" />
        <label className="flap" htmlFor="flap" onClick={openModal}></label>
        <div className="envelope-back"></div>
        <div className="card"></div>
        <div className="card-front"></div>
      </div>
    </div>
  );
}
