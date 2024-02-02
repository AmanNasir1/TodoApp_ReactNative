import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { useDispatch } from 'react-redux'
import { addTodo } from "../store/authReducer"
import tw from "twrnc"
import moment from 'moment'
import CalendarIcon from '../icon/CalendarIcon'
import ArrowIcon from '../icon/ArrowIcon'
import CustomHeader from '../Components/CustomHeader'
import Toast from 'react-native-toast-message';

const AddTodo = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [startDate, setstartDate] = useState<Date | null>()
  const [endDate, setEndDate] = useState<Date | null>()
  const [taskName, setTaskName] = useState("")
  const [taskDetails, setTaskDetails] = useState("")
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showstartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };
  const hidestartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };
  const handleStartDateConfirm = (date: any) => {
    setstartDate(date)
    hidestartDatePicker();
  };

  const handleEndDateConfirm = (date: any) => {
    setEndDate(date)
    hideEndDatePicker()
  }

  const addTask = () => {
    setLoading(true)
    try {
      if (taskName !== "" || taskDetails !== "") {
        dispatch(addTodo({ taskName, taskDetails, startDate, endDate, isCompleted: false }))
        setTaskName('')
        setTaskDetails('')
        setstartDate(null)
        setEndDate(null)
        Toast.show({ type: "success", text1: "Todo Added Successfully!", })
      } else {
        Toast.show({ type: "error", text1: "Please Enter All Fields" })

      }
    } catch (error) {
      Toast.show({ type: "error", text1: "Failed to add Todo!" })
    } finally {
      setLoading(false)
    }


  }



  return (
    <>
      <CustomHeader title="Add Todo" />
      <ScrollView style={tw`h-full  `}>
        <View style={tw` mx-3 `}>
          <View style={tw`w-full`}>

            <TextInput placeholder='Task Name' placeholderTextColor="silver" value={taskName} onChangeText={(task) => setTaskName(task)} style={tw`bg-white rounded-2xl pl-3 mb-4 mt-6`} />

            <TextInput placeholder='Task Description' placeholderTextColor="silver" multiline={true} numberOfLines={8} textAlignVertical='top' value={taskDetails} onChangeText={(task) => setTaskDetails(task)} style={tw`bg-white rounded-2xl pl-3 `} />
            <TouchableOpacity onPress={showstartDatePicker} style={tw`bg-[#fff] p-4 mt-4 rounded-xl flex flex-row justify-between items-center`} >
              <View style={tw`flex flex-row items-center`}>
                <CalendarIcon />
                {startDate ? <Text style={tw`text-black font-bold text-base pl-3`}>{moment(startDate).format("DD MMMM, YYYY")}</Text> : <Text style={tw`text-black font-bold text-base pl-3`}>Select Start Date</Text>}
              </View>
              <ArrowIcon />


            </TouchableOpacity>
            <DateTimePicker
              isVisible={isStartDatePickerVisible}
              mode="date"
              onConfirm={handleStartDateConfirm}
              onCancel={hidestartDatePicker}
              minimumDate={new Date()}


            />
            <TouchableOpacity onPress={showEndDatePicker} style={tw`bg-[#fff] p-4 mt-4 rounded-xl flex flex-row justify-between items-center`} >
              <View style={tw`flex flex-row items-center`}>
                <CalendarIcon />
                {endDate ? <Text style={tw`text-black font-bold text-base pl-3`}>{moment(endDate).format("DD MMMM, YYYY")}</Text> : <Text style={tw`text-black font-bold text-base pl-3`}>Select End Date</Text>}
              </View>
              <ArrowIcon />


            </TouchableOpacity>
            <DateTimePicker
              isVisible={isEndDatePickerVisible}
              mode="date"
              onConfirm={handleEndDateConfirm}
              onCancel={hideEndDatePicker}
              minimumDate={startDate}
            />
          </View>


        </View>
        <TouchableOpacity onPress={addTask} style={tw`bg-[#5F33E1] h-15 flex justify-center mt-4 rounded-xl mx-3 `} >
          {loading ?
            <ActivityIndicator style={tw`flex flex-1`} size="large" color="#fff" />
            : <Text style={tw`text-white text-center font-bold text-base`}>Add Task</Text>}
        </TouchableOpacity>
      </ScrollView>

    </>
  )
}

export default AddTodo

