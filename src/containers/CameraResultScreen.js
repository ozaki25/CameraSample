import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native';

class CameraResultScreen extends Component {
  static navigationOptions = {
    title: '撮影結果',
  }

  onPress = () => this.props.navigation.goBack();

  render() {
    const { height, width } = Dimensions.get('window')
    return (
      <TouchableOpacity onPress={this.onPress} style={{ flex: 1 }}>
        <Image
           resizeMode="contain"
           source={{ uri: this.props.navigation.state.params.path }}
           style={{ height: height / 2, width: width / 2, alignSelf: 'center' }}/>
        <Text>{JSON.stringify(this.props.navigation.state)}</Text>
      </TouchableOpacity>
    )
  }
}

export default CameraResultScreen;
