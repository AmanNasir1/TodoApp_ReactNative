import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../store/authReducer'
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParams } from '../types/types'

type Props = NativeStackScreenProps<AuthStackParams, "Login">

const LoginScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = async () => {
    setLoading(true)
    try {
      const user = await auth().signInWithEmailAndPassword(email, password)
      if (user) {
        dispatch(loginSuccess(true))
      }
    } catch (error) {
      console.log(error);

    }
    finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Login</Text>
      <TextInput placeholder='Email' value={email} onChangeText={(email) => setEmail(email)} style={styles.addTaskInput} />
      <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={(password) => setPassword(password)} style={styles.addTaskInput} />
      <TouchableOpacity onPress={handleLogin} style={styles.addTaskBtn} disabled={loading}>
        <Text style={styles.addTaskText}>Login</Text>
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
    padding: 15,
    borderRadius: 14,
    margin: 10
  },
  addTaskText: {
    textAlign: "center",
    color: "white",
    fontSize: 21
  },
  addTaskInput: {
    borderRadius: 15,
    paddingLeft: 15,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: "black",
  }
})