import React from "react";
import ReactDOM from "react-dom/client";
import SomeComponent from "./SomeComponent";


const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").style.textDecoration = "line-through"; // imperative programming
root.render(<SomeComponent />);
