import React, { useState } from "react";
import Circle from "./Circle"
import ColorButtons from './ColorButtons'

function randRange(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}


// 'ivory', 'peachPuff', 'lavender'
const ColoredCircles = () => {
  const [circles, setCircles] = useState([])
  const addCircle = (newCircle) => {
    setCircles(circles => [...circles, { newCircle, x: randRange(), y: randRange() }])
  }

  const changePosition = idx => {
    setCircles(circles => {
      return circles.map((circle, i) => (
        i === idx ? { ...circle, x: randRange(), y: randRange() } : circle))
    })
  }

  return (
    <div>
      <ColorButtons addCircle={addCircle} options={["lightsteelblue", "paleturquoise", "cornflowerblue"]} />
      {circles.map(({ color, x, y }, idx) =>
        <Circle
          color={color}
          idx={idx}
          key={idx}
          x={x}
          y={y}
          changePosition={changePosition} />
      )}
    </div>
  )
}

export default ColoredCircles;
