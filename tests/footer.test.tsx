// import modules or packages
import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-environment-jsdom";

import AppFooter from "../src/components/Utils/Footer/Footer";

// testing footer component
test("Should render and do Footer component tests", ()=>{
    render(<AppFooter />);
});