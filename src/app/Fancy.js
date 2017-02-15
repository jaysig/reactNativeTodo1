import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export class Fancy extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.box}>

        </View>
        <Text>Blah blah</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef235f',
    padding: 40
  },
  box: {
    backgroundColor: 'yellow',
    width: 30,
    height: 30,
  }
});
