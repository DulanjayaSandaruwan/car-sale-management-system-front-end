import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginPage from '../screens/LoginPage';
import Register from '../screens/Register';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomePage"
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
