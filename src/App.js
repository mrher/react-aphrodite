import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {css} from 'aphrodite';
import styles from './AppStyles';

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        our app
      </div>
    );
  }
}

export default App;
