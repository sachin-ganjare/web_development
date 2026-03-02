import React from "react";

function SomeComponent() {
  const time = 15;

  return (
    <div>
      {time > 11 && <h1>Its afternoon!</h1>} // is equivalent to ternary operator having else `null`.
    </div>
  );
}

export default SomeComponent;
