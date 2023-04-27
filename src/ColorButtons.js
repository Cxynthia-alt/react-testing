import React from "react";


const ColorButtons = ({ options, addCircle }) => {

  return (
    <div>
      {options.map((color, idx) => <button onClick={() => addCircle(color)} key={idx} style={{ backgroundColor: color }}>{color}</button>)
      }
    </div >
  )
}

export default ColorButtons
