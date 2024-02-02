import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import TodayTask from './TodayTask'
import AddTodo from './AddTodo'
import Profile from './Profile'
import UserIcon from '../icon/UserIcon'
import AddIcon from '../icon/AddIcon'
import CalendarIcon from '../icon/CalendarIcon'
import HomeIcon from '../icon/HomeIcon'

const RootStack = createBottomTabNavigator()
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ tabBarHideOnKeyboard: true, tabBarShowLabel: false }}>
      <RootStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarIcon: () => <HomeIcon /> }} />
      <RootStack.Screen name='TodayTask' component={TodayTask} options={{ headerShown: false, tabBarIcon: () => <CalendarIcon /> }} />
      <RootStack.Screen name='AddTodo' component={AddTodo} options={{ headerShown: false, tabBarIcon: () => <AddIcon /> }} />
      <RootStack.Screen name='Profile' component={Profile} options={{ headerShown: false, tabBarIcon: () => <UserIcon /> }} />
    </RootStack.Navigator>
  )
}

export default RootStackScreen