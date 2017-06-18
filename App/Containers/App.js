// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from './Styles/AppStyle';
import EventName from '../Components/EventName';

/**
 * Root component to wire up ios and android.
 * Write code just ones ;)
 */
class App extends Component {
  constructor() {
    super();
    this._incrementCounter = this._incrementCounter.bind(this)
    this.state = {
      counter: 0
    }
  }

  _incrementCounter() {
    let newCounter = this.state.counter + 1
    this.setState({counter: newCounter})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Folks. {this.state.counter}
        </Text>
        <EventName name="TYPO3camp Berlin" />
        <Button title="Count" onPress={this._incrementCounter} />
      </View>
    );
  }
}

export default App;
