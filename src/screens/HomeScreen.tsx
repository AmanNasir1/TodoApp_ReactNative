import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, logOut, saveUserInfo, todoTask } from '../store/authReducer'
import tw from "twrnc"
import auth from '@react-native-firebase/auth';
import LogoutIcon from '../icon/LogoutIcon'
import moment from 'moment'
import Toast from 'react-native-toast-message'
import TodoList from '../Components/TodoList'
import TodoModal from '../Components/TodoModal'

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setloading] = useState(false)
  const user = useSelector(saveUserInfo)
  const todo = useSelector(todoTask)
  const dispatch = useDispatch()
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleDelete = (id: any) => {
    dispatch(deleteTodo(id))
  }
  const handleLogout = () => {
    auth().signOut().then(() => {
      setloading(true)
      dispatch(logOut())
      Toast.show({ type: "success", text1: "User Logout", })

    });
  }

  const todaysTodo = todo.filter((todo) => {
    return moment(todo.startDate).format("MM-DD-YYYY") === moment().format("MM-DD-YYYY")

  })






  return (
    < View style={tw`mx-4 mt-2 mb-3`}>
      <View style={tw`flex justify-between items-center flex-row`}>
        <View >
          <Text style={tw`text-lg  text-black mt-3`}>Hello!</Text>
          <Text style={tw`text-2xl text-black font-bold`}>{user[1]}</Text>

        </View>
        <TouchableOpacity style={tw` p-2 rounded-lg`} onPress={handleLogout}>
          {loading ? <ActivityIndicator style={tw`flex flex-1`} size="large" /> : <LogoutIcon />}

        </TouchableOpacity>
      </View>

      <View style={tw`mt-5 rounded-2xl py-8 px-3 flex flex-row justify-between items-center bg-[#5F33E1]`}>
        <View>

          <Text style={tw`text-xl text-white `}>Your Latest Task is:</Text>
          <Text style={tw`text-lg text-white mt-2 text-center font-bold`}>{todaysTodo[0]?.taskName}</Text>
        </View>
        <TouchableOpacity style={tw`bg-white p-2 rounded-md`} onPress={toggleModal}>
          <Text style={tw`text-[#5F33E1] font-bold`}>View Task</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mt-10`}>
        <Text style={tw`text-black text-2xl font-bold`}>In Progress</Text>

        <FlatList data={todaysTodo} renderItem={({ item }) => <TodoList id={item.index} taskName={item.taskName} taskDetails={item.taskDetails} startDate={item.startDate} endDate={item.endDate} handleDelete={handleDelete} />} />

      </View>
      <TodoModal isModalVisible={isModalVisible} toggleModal={toggleModal} taskName={todaysTodo[0]?.taskName} taskDetails={todaysTodo[0]?.taskDetails} startDate={todaysTodo[0]?.startDate} endDate={todaysTodo[0]?.endDate} />
    </View >
  )
}

export default HomeScreen