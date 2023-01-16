import { render } from "@testing-library/react";
import App from "./App";

describe("Test Suit Music", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
