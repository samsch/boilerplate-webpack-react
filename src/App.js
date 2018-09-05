import React from 'react';
import styles from './style.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  inc () {
    this.setState(state => ({ count: state.count + 1 }));
  }
  dec () {
    this.setState(state => ({ count: state.count - 1 }));
  }
  render () {
    const { count } = this.state;
    return (
      <div>
        <h1 className={styles.heading}>Counter Example</h1>
        <p className={styles.output} >Count: {count}</p>
        <p>
          <button type="button" onClick={this.inc} >Inc</button>
          {' '}
          <button type="button" onClick={this.dec} >Dec</button>
        </p>
      </div>
    );
  }
}

export default App;
