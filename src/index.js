import React from 'react';
import { render } from "react-dom";

const App = () => (
  <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
    <h1>It worked! ;)</h1>
    <h4>You can create your components inside <span style={{color: 'red'}}>'/src/lib'</span> folder. </h4>
    <h3>Don't forget to import and export them in the <span style={{color: 'red'}}>'/src/lib/index.js'</span> file before publish it.</h3>
    <h5>It was made by <span style={{color: 'red'}}>'Redwall Solutions!</span></h5>
    <p>Thank you.</p>
  </div>
);

render(<App />, document.getElementById("root"));
