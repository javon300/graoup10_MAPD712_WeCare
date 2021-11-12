import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';

const MyStack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="LoginScreen" component={LoginScreen} options={{
    headerShown: false
}}/>
        <MyStack.Screen name="HomeScreen" component={HomeScreen} options={{
    headerShown: false
}}/>
        <MyStack.Screen name="SignupScreen" component={SignUpScreen} options={{
    headerShown: false
}}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
