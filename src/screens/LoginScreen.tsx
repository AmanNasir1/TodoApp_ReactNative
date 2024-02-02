import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../store/authReducer'
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParams } from '../types/types'
import tw from "twrnc"
import Toast from 'react-native-toast-message';
type Props = NativeStackScreenProps<AuthStackParams, "Login">

const LoginScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = async () => {
    Keyboard.dismiss()
    setLoading(true)
    try {
      if (email !== "" || password !== "") {
        const user = await auth().signInWithEmailAndPassword(email, password)
        if (user) {
          Toast.show({ type: "success", text1: "Login Successfull!", })
          dispatch(loginSuccess(true))
          setEmail("")
          setPassword("")
        } else {
          Toast.show({ type: "error", text1: "User not Found", })
        }
      } else {
        Toast.show({ type: "error", text1: "Enter All Field!", })
      }
    } catch (error) {
      Toast.show({ type: "error", text1: "Login Failed!", })

    }
    finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Login</Text>
      <TextInput placeholder='Email' placeholderTextColor="silver" keyboardType={'email-address'} value={email} onChangeText={(email) => setEmail(email)} style={styles.addTaskInput} />
      <TextInput placeholder='Password' placeholderTextColor="silver" secureTextEntry value={password} onChangeText={(password) => setPassword(password)} style={styles.addTaskInput} />
      <TouchableOpacity onPress={handleLogin} style={styles.addTaskBtn} disabled={loading}>
        {loading ?
          <ActivityIndicator style={tw`flex flex-1`} size="large" color='#fff' />
          : <Text style={styles.addTaskText}>Login</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")} disabled={loading} style={styles.addTaskBtn}>
        <Text style={styles.addTaskText}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  HeaderText: {
    fontSize: 32,
    color: "#5F33E1",
    fontWeight: "bold",
    textAlign: "center"
  },
  addTaskBtn: {
    backgroundColor: "#5F33E1",
    borderRadius: 14,
    marginVertical: 10,
    marginHorizontal: 13,
    height: 55,
    display: "flex",
    justifyContent: "center"

  },
  addTaskText: {
    textAlign: "center",
    color: "white",
    fontSize: 21
  },
  addTaskInput: {
    borderRadius: 15,
    paddingLeft: 15,
    marginVertical: 10,
    marginHorizontal: 13,
    backgroundColor: '#fff',
    color: "black",
  }
})