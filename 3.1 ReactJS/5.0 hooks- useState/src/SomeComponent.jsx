import React from "react";

// useState -> helps change rendered state (UI).

function SomeComponent() {
const useState = React.useState; // alternatively -> import {useState} from "react";


let [count, setcount] = useState(0);
function incCount(){
  setcount(count+1); // You cannot use count--; as it will modify count's value.
}

function decCount(){
  setcount(count-1);
}

  return (
    <div >
      <h1>Your Current count = "{count}"</h1> {/* Display count. */}
      <button type="button" onClick={incCount}>Increment</button>
      <button type="button" onClick={decCount}>Decrement</button>

    </div>
  );
}

export default SomeComponent;
