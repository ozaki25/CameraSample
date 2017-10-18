import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

class CameraSetupScreen extends Component {
  static navigationOptions = {
    title: '撮影準備',
  }

  onPress = () =>  this.props.navigation.navigate('CameraScreen');

  render() {
    return <TouchableOpacity style={{ flex: 1, backgroundColor: 'lightblue' }} onPress={this.onPress} />;
  }
}

export default CameraSetupScreen;
