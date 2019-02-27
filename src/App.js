import React from 'react';
import styles from './style.css';

const App = () => {
  const [count, setCount] = React.useState(0);
  function inc () {
    setCount(count => count + 1);
  }
  function dec () {
    setCount(count => count - 1);
  }
  return (
    <div>
      <h1 className={styles.heading}>Counter Example</h1>
      <p className={styles.output} >Count: {count}</p>
      <p>
        <button type="button" onClick={inc} >Inc</button>
        {' '}
        <button type="button" onClick={dec} >Dec</button>
      </p>
    </div>
  );
};

export default App;
