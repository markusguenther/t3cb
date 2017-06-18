// @flow

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Styles/AppStyle';
import EventName from '../Components/EventName';

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
        <EventName name="TYPO3camp Berlin" />
      </View>
    );
  }
}

export default App;
