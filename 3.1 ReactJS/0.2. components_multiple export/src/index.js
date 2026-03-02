import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Example Components: SomePart and SomePart2
import * as TwoExports from './SomePart.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <header className="App-header">
      hey i have edited this file successfully.!
    </header>
  
 
    (// Components Here:)
    <TwoExports.first_exp/>
    <TwoExports.second_exp/>
  </div>
);

// what and where -> ReactDOM.render( WHAT , WHERE)
// for example, ReactDOM.render(<div></div>, document.getElementById("root"));

// alternatively, createRoot then render at that.
// for example as above, ReactDOM.createRoot(//someid).render(//what to render)