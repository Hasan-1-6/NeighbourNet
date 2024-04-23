// screens/LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Perform authentication logic here
    // If authentication succeeds, navigate to main app screen
    navigation.navigate('App');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
