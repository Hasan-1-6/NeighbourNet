<<<<<<< HEAD
import React from "react";
import { Text, View, SafeAreaView } from "react-native";

const Panel = () => {
    return (
        <SafeAreaView>
            <Text>hello its pannel</Text>
        </SafeAreaView>
    )
}

export default Panel;
=======
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Issue from './issue';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  );
};

const Panel = () => {
  return (
    <Drawer.Navigator initialRouteName='NeighbourNet'>
      <Drawer.Screen name='NeighbourNet' component={Issue} />
      <Drawer.Screen name='Issue' component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Panel;
>>>>>>> 83ba57c7cf8dbca143037a68d73729f42088c5e0
