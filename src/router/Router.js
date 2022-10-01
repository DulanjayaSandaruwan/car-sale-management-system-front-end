import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginPage from '../screens/LoginPage';
import Register from '../screens/Register';
import HomePage from '../screens/HomePage';
import AddCar from '../screens/AddCar';
import ManageCar from '../screens/ManageCar';
import Settings from '../screens/Settings';

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
        <Stack.Screen
          options={{headerShown: false}}
          name="AddCar"
          component={AddCar}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ManageCar"
          component={ManageCar}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
