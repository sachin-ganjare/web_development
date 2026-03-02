import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function SomeComponent(props) {
  return <p> hello world from SomeComponent. the prop data is {props.my_prop}</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <header className="App-header">
      hey i have edited this file successfully.!
    </header>

    (// Components Here:)
    <SomeComponent my_prop="::: -> passed data/value in prop. " />
  </div>
);

// what and where -> ReactDOM.render( WHAT , WHERE)
// for example, ReactDOM.render(<div></div>, document.getElementById("root"));

// alternatively, createRoot then render at that.
// for example as above, ReactDOM.createRoot(//someid).render(//what to render)