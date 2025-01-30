import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserSelectionScreen from '../screens/UserSelectionScreen';

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SelectUser" component={UserSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
