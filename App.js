import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import AppNavigator, { landscapeOrientationScreens } from './src/navigators/AppNavigator';

const handleOrientation = currentRouteName => (
  landscapeOrientationScreens.includes(currentRouteName) ?
    Orientation.lockToLandscapeLeft() : Orientation.lockToPortrait()
);

const onNavigationStateChange = (prevState, currentState) => {
  const routes = currentState.routes;
  const currentRouteName = routes[routes.length - 1].routeName;
  handleOrientation(currentRouteName);
};

class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return <AppNavigator onNavigationStateChange={onNavigationStateChange} />;
  }
}

export default App;
