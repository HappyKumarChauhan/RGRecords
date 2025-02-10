import * as React from 'react';
import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './src/navigation/StackNavigator';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
      <StatusBar translucent backgroundColor='transparent' />
      <StackNavigator />
      </View>
    </SafeAreaView>
  );
}
