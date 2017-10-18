import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';

class CameraScreen extends Component {
  static navigationOptions = {
    title: '撮影',
  }

  onPress = async () => {
    const data = await this.camera.capture();
    this.props.navigation.navigate('CameraResultScreen', { path: data.path });
  }

  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.onPress}>
        <Camera
           ref={camera => this.camera = camera}
           style={{ flex: 1 }}
           captureTarget={Camera.constants.CaptureTarget.temp}
           flashMode={Camera.constants.FlashMode.off} />
      </TouchableOpacity>
    );
  }
}

export default CameraScreen;
