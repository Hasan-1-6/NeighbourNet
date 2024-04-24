import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native-web';

const Issue = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <Text>issue page </Text>
        <Button
          title='open Drawer'
          onPress={() => navigation.openDreawer()}></Button>
      </SafeAreaView>
    </>
  );
};

export default Issue;
