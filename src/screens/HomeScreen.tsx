import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, saveUserInfo, todoTask } from '../store/authReducer'
import tw from "twrnc"
import auth from '@react-native-firebase/auth';
import LogoutIcon from '../icon/LogoutIcon'
import moment from 'moment'
import TodoList from '../Components/TodoList'

const HomeScreen = () => {
  const user = useSelector(saveUserInfo)
  const todo = useSelector(todoTask)
  const dispatch = useDispatch()
  const [inProgressTodo, setInProgressTodo] = useState<any>([])
  const handleLogout = () => {
    auth().signOut().then(() => dispatch(logOut()));
  }

  useEffect(() => {
    for (let i = 0; i < todo.length; i++) {
      if (moment(todo[i].startDate).isSame(moment())) {
        setInProgressTodo(todo[i])
      }
    }

  }, [todo])


  return (
    < View style={tw`ml-3 mr-3 mt-2 mb-3`
    }>
      <View style={tw`flex justify-between items-center flex-row`}>
        <View >
          <Text style={tw`text-lg  text-black mt-4`}>Hello!</Text>
          <Text style={tw`text-2xl text-black font-bold`}>Name</Text>
        </View>
        <TouchableOpacity style={tw` p-2 rounded-lg`} onPress={handleLogout}>
          <LogoutIcon />
        </TouchableOpacity>
      </View>

      <View style={tw`mt-10`}>
        <Text style={tw`text-black text-2xl font-bold`}>In Progress</Text>

        {/* {todo.filter(x => moment(x.startDate) !== moment()).map((item) => <View><Text>{item.startDate}</Text></View>)} */}
      </View>
    </View >
  )
}

export default HomeScreen