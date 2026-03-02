import React from "react";
import { useState } from "react";

function SomeComponent() {  
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() { setHeadingText("Submitted!")};
  
  const [mouseStyle, setMouseStyle] = useState({
    backgroundColor:"White"
  });
  function handleMouseOver() { setMouseStyle({backgroundColor:"black"}) }
  function handleMouseOut() { setMouseStyle({backgroundColor:"blue"}) }

  return <div>
    <h1>{headingText}</h1>
    <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={mouseStyle} onClick={handleClick}>Submit</button>
  </div>;
}

export default SomeComponent;
