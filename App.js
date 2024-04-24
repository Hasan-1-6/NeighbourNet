import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Login, Panel } from "./screens";
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Client } from './screens';
>>>>>>> 83ba57c7cf8dbca143037a68d73729f42088c5e0
import { initializeApp } from '@firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0zu28tbv2ShBRkaNmqbH5xU41SNNSkC0',
  authDomain: 'fir-auth-1f5c0.firebaseapp.com',
  projectId: 'fir-auth-1f5c0',
  storageBucket: 'fir-auth-1f5c0.appspot.com',
  messagingSenderId: '918131323751',
  appId: '1:918131323751:web:781bd31b9dba658ec0f5c2',
};

firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Panel'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Panel'
          component={Client}
          options={{ headerShown: false }}
        />
<<<<<<< HEAD
        <Stack.Screen
        name="Panel"
        component = { Panel }
        options = {{
          headerShown : false
        }}
      />
=======
>>>>>>> 83ba57c7cf8dbca143037a68d73729f42088c5e0
      </Stack.Navigator>
    </NavigationContainer>
  );
}
