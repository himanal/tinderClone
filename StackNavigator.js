import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen'
import ChatScreen from './screen/ChatScreen'
import useAuth from './hooks/useAuth'


const Stack=createNativeStackNavigator()

const StackNavigator = () => {
    const { user }=useAuth()



  return (
    <NavigationContainer>
        <Stack.Navigator>
           {user ? (
           <>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Chat' component={ChatScreen}/>
           </>
           ):(
           <Stack.Screen name='Login' component={LoginScreen}/> )
           }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator