import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../store/authReducer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from '../types/types';

type Props = NativeStackScreenProps<AuthStackParams, "Signup">

const SignupScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSignup = async () => {
    setLoading(true)
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password)
      if (user) {

        dispatch(saveUserData([user.user, name]))


      }
    } catch (error) {
      console.log("error");

    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Signup</Text>
      <TextInput placeholder='name' value={name} onChangeText={(name) => setName(name)} style={styles.addTaskInput} />
      <TextInput placeholder='email' value={email} onChangeText={(email) => setEmail(email)} keyboardType={'email-address'} style={styles.addTaskInput} />
      <TextInput placeholder='password' secureTextEntry={true} value={password} onChangeText={(password) => setPassword(password)} style={styles.addTaskInput} />
      <TouchableOpacity onPress={handleSignup} disabled={loading} style={styles.addTaskBtn}>
        <Text style={styles.addTaskText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} disabled={loading} style={styles.addTaskBtn}>
        <Text style={styles.addTaskText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

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