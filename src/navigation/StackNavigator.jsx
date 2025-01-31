import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserSelectionScreen from '../screens/UserSelectionScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpOtpScreen from '../screens/SignUpOtpScreen';
import VerificationSuccessScreen from '../screens/VerificationSuccessScreen';
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SelectUser" component={UserSelectionScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpOtp" component={SignUpOtpScreen} />
        <Stack.Screen name="VerificationSuccess" component={VerificationSuccessScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
