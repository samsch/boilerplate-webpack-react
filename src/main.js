import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ### Business logic

// Basic state store, similar to React Component state api. Replace with actual
// business logic

const initialState = {
  count: 0,
};

const store = {
  state: initialState,
};

// Can be passed a function or new state to merge in.
const updateState = update => {
  const newState = typeof update === 'function' ? update(store.state) : update;
  store.state = Object.assign({}, store.state, newState);
  if (store.onUpdate) {
    // Don't rerender in the same cycle, just in case...
    setTimeout(() => {
      store.onUpdate(store.state);
    }, 0);
  }
};

const increment = () => updateState(state => ({ count: state.count + 1 }));
const decrement = () => updateState(state => ({ count: state.count - 1 }));
const reset = () => updateState(initialState);

// ### App bootstrap (combine business logic with view.)

const appRootElement = document.getElementById('app-root');

const render = state => {
  ReactDOM.render(
    <App state={state} action={{ increment, decrement, reset }} />,
    appRootElement
  );
};

store.onUpdate = render;

render(store.state);
