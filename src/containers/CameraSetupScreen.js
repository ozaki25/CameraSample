import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    backgroundColor: 'lightblue',
  },
  l: {
    backgroundColor: 'lightcyan',
  },
});

class CameraSetupScreen extends Component {
  static navigationOptions = {
    title: '撮影準備',
  }

  onPress = (orientation) => () => this.props.navigation.navigate('CameraScreen', { orientation });

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.panel, styles.p]} onPress={this.onPress('p')}>
          <Text>portrait</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.panel, styles.l]} onPress={this.onPress('l')}>
          <Text>landscapeLeft</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CameraSetupScreen;
