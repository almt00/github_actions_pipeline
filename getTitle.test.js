import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Intro from "./components/intro";

test("getTitle", () => {
  render(<Intro />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Blog.");
});
