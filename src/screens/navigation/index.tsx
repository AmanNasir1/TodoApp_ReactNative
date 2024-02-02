import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '../../store/authReducer'
import RootStackScreen from '../RootStackScreen'
import AuthStackScreen from '../AuthStackScreen'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#faf9f2'
  },
};
const Navigator = () => {

  const user = useSelector(isLoggedIn)

  return (
    <NavigationContainer theme={MyTheme} >
      {user ?
        <RootStackScreen />
        :
        <AuthStackScreen />
      }
    </NavigationContainer>
  )
}

export default Navigator