import React from 'react';
import ReactDOM from 'react-dom';

const foo = function() {
  ReactDOM.render(
    <div>
      <h1>Hello, world!</h1>
      <p>This was rendered with React.</p>
    </div>,
    document.getElementById('app-body')
  );
}

export default foo;
