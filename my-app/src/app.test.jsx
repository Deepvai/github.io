import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('should the app render', () => {
  render(<App/>)
  expect(screen.getByText(/count/i)).toBeInTheDocument();
})
