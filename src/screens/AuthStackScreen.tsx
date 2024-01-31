import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { AuthStackParams } from '../types/types'

const AuthStack = createNativeStackNavigator<AuthStackParams>()


const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Signup" component={SignupScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen