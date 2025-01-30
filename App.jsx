import * as React from 'react';
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import StackNavigator from './src/navigation/StackNavigator';


function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <StackNavigator/>
  );
}
