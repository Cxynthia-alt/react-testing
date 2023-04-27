import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// snapshot test
it("should match snapshot", () => {
  const { asFragment } = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot()
})

// specialized test
it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />)

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  //move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow)

  //expect the first image to show but not the second
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()

})

it("hides the left/right arrow", () => {
  const { getByTestId } = render(<Carousel />)
  const rightArrow = getByTestId("right-arrow");


  //expect left arrow to be hidden and right arrow to exist on the first image
  expect(rightArrow).not.toHaveClass("hidden")

  //move forward, expect both arrows to exist
  fireEvent.click(rightArrow);

  //move to the last
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  //expect right arrow to be hidden and left arrow to exist on the first image
  const leftArrow = getByTestId("left-arrow")
  expect(leftArrow).not.toHaveClass("hidden");
})
