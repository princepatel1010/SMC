import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Blog, { BackIcon } from '../components/Blog';
import PagesContent from '../components/Pages';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Blog"
        component={Blog}
        options={{
          headerTintColor: 'white',
          headerTransparent: true,
          headerLeft: null,
          headerTitle: props => <BackIcon {...props} />
        }}
      />
       <Stack.Screen name="BackIcon" component={BackIcon}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
