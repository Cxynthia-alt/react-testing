import React from "react";
import { render } from "@testing-library/react";
import Card from './Card.js'

// smoke test
test("renders without crashing", () => {
  render(<Card />)
})
