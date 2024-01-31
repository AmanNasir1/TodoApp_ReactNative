import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '../../store/authReducer'
import RootStackScreen from '../RootStackScreen'
import AuthStackScreen from '../AuthStackScreen'

const Navigator = () => {

  const user = useSelector(isLoggedIn)

  return (
    <NavigationContainer>
      {user ?
        <RootStackScreen />
        :
        <AuthStackScreen />
      }
    </NavigationContainer>
  )
}

export default Navigator