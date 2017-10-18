import { StackNavigator } from 'react-navigation';
import CameraSetupScreen from '../containers/CameraSetupScreen';
import CameraScreen from '../containers/CameraScreen';
import CameraResultScreen from '../containers/CameraResultScreen';

const AppNavigator = StackNavigator({
  CameraSetupScreen: { screen: CameraSetupScreen },
  CameraScreen: { screen: CameraScreen },
  CameraResultScreen: { screen: CameraResultScreen },
}, {
  navigationOptions: {
    headerBackTitle: null,
  },
});

export const landscapeOrientationScreens = ['CameraScreen'];

export default AppNavigator;
