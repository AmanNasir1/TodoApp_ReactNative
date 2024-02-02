import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../store/authReducer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from '../types/types';
import Toast from 'react-native-toast-message';
import tw from "twrnc"
type Props = NativeStackScreenProps<AuthStackParams, "Signup">

const SignupScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()



  const handleSignup = async () => {
    Keyboard.dismiss()
    setLoading(true)
    try {
      if (name !== "" || email !== "" || password !== "") {

        const user = await auth().createUserWithEmailAndPassword(email, password)
        if (user) {

          dispatch(saveUserData([user.user, name]))
          Toast.show({ type: "success", text1: "Signup Successfull", })

        }
      } else {
        Toast.show({ type: "error", text1: "Please Enter All Fields!", })
      }
    } catch (error) {
      Toast.show({ type: "error", text1: "Signup Failed!", })

    } finally {
      setLoading(false)
    }
  }

  return (
    <>

      <View style={styles.container}>
        <Text style={styles.HeaderText}>Signup</Text>
        <TextInput placeholder='name' placeholderTextColor="silver" value={name} onChangeText={(name) => setName(name)} style={styles.addTaskInput} />
        <TextInput placeholder='email' placeholderTextColor="silver" value={email} onChangeText={(email) => setEmail(email)} keyboardType={'email-address'} style={styles.addTaskInput} />
        <TextInput placeholder='password' placeholderTextColor="silver" onBlur={() => Keyboard.dismiss()} secureTextEntry={true} value={password} onChangeText={(password) => setPassword(password)} style={styles.addTaskInput} />
        <TouchableOpacity onPress={handleSignup} disabled={loading} style={styles.addTaskBtn}>
          {loading ?
            <ActivityIndicator style={tw`flex flex-1`} size="large" color="#fff" />
            : <Text style={styles.addTaskText}>Signup</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} disabled={loading} style={styles.addTaskBtn}>
          <Text style={styles.addTaskText}>Login</Text>
        </TouchableOpacity>

      </View >

    </>
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