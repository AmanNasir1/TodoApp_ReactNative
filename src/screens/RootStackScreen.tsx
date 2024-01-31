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
import FileIcon from '../icon/FileIcon'
import LogoutIcon from '../icon/LogoutIcon'

const RootStack = createBottomTabNavigator()
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ tabBarHideOnKeyboard: true, tabBarShowLabel: false }}>
      <RootStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarIcon: () => <HomeIcon /> }} />
      <RootStack.Screen name='TodayTask' component={TodayTask} options={{ headerTitleAlign: "center", tabBarIcon: () => <CalendarIcon /> }} />
      <RootStack.Screen name='AddTodo' component={AddTodo} options={{ headerTitleAlign: "center", tabBarIcon: () => <AddIcon /> }} />
      <RootStack.Screen name='Profile' component={Profile} options={{ headerRightContainerStyle: { marginRight: 15 }, headerRight: () => <LogoutIcon />, tabBarIcon: () => <UserIcon /> }} />
    </RootStack.Navigator>
  )
}

export default RootStackScreen