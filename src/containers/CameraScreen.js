import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';

class CameraScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onPress = () => {
    this.props.navigation.navigate('CameraResultScreen');
  }

  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.onPress}>
        <Camera
           style={{ flex: 1 }}
           captureTarget={Camera.constants.CaptureTarget.temp}
           flashMode={Camera.constants.FlashMode.off} />
      </TouchableOpacity>
    );
  }
}

export default CameraScreen;
