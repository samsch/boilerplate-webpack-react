import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const App = props =>
  <div>
    <h1>Counter Example</h1>
    <div>
      Current count: {props.state.count}
    </div>
    <div>
      <button type="button" onClick={props.action.increment}>
        Increment
      </button>{' '}
      <button type="button" onClick={props.action.decrement}>
        Decrement
      </button>
    </div>
    <div>
      <button type="button" onClick={props.action.reset}>
        Reset
      </button>
    </div>
  </div>;
App.propTypes = {
  state: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }),
  action: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }),
};

export default App;
