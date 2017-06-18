// @flow

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Styles/EventNameStyle';

class EventName extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default EventName;
