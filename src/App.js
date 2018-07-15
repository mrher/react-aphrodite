import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {css} from 'aphrodite/no-important';
import styles from './AppStyles';

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div>our app</div>
        <div className={css(styles.square)}></div>
      </div>
    );
  }
}

export default App;
