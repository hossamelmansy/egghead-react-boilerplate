import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", function() {
  it("Renders without error", function() {
    render(<App />);
  });
});
