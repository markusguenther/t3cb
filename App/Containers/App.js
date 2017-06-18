// @flow

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Styles/AppStyle';

/**
 * Root component to wire up ios and android.
 * Write code just ones ;)
 */
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Folks.
        </Text>
      </View>
    );
  }
}

export default App;
