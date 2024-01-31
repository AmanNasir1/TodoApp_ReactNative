import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, todoTask } from "../store/authReducer"
import tw from "twrnc"
import moment from 'moment'
import CalendarIcon from '../icon/CalendarIcon'
import ArrowIcon from '../icon/ArrowIcon'
const AddTodo = () => {
  const dispatch = useDispatch()
  const [startDate, setstartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
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

    if (taskName !== "" || taskDetails !== "") {
      dispatch(addTodo({ taskName, taskDetails, startDate, endDate, isCompleted: false }))
      setTaskName('')
      setTaskDetails('')
    } else {
      console.log("enter all field");

    }

  }



  return (

    <View style={tw`flex justify-between items-center h-full`}>
      <View style={tw`w-10/12 `}>

        <TextInput placeholder='Task Name' value={taskName} onChangeText={(task) => setTaskName(task)} style={tw`bg-white rounded-2xl pl-3 mb-4 mt-6`} />

        <TextInput placeholder='Task Description' multiline={true} numberOfLines={8} textAlignVertical='top' value={taskDetails} onChangeText={(task) => setTaskDetails(task)} style={tw`bg-white rounded-2xl pl-3 `} />
        <TouchableOpacity onPress={showstartDatePicker} style={tw`bg-[#fff] p-4 mt-4 rounded-xl flex flex-row justify-between items-center`} >
          <View style={tw`flex flex-row items-center`}>
            <CalendarIcon />
            {startDate ? <Text style={tw`text-black font-bold text-base pl-3`}>{moment(startDate).format("DD MMMM, YYYY")}</Text> : <Text style={tw`text-black font-bold text-base pl-3`}>Select Start Date</Text>}
          </View>
          <ArrowIcon />


        </TouchableOpacity>
        <DateTimePicker
          isVisible={isStartDatePickerVisible}
          date={startDate}
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
          date={endDate}
          onConfirm={handleEndDateConfirm}
          onCancel={hideEndDatePicker}
        />
      </View>


      <View style={tw`w-10/12 mb-3 `}>
        <TouchableOpacity onPress={addTask} style={tw`bg-[#5F33E1] p-4 mt-4 rounded-xl`} >
          <Text style={tw`text-white text-center font-bold text-base`}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default AddTodo

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   addTaskBtn: {
//     backgroundColor: "#5F33E1",
//     padding: 15,
//     borderRadius: 14,
//     height: 52,
//     width: 331,
//     marginBottom: 15
//   },
//   addTaskText: {
//     textAlign: "center",
//     color: "white",
//     fontSize: 21
//   },
//   addTaskInput: {
//     borderRadius: 15,
//     paddingLeft: 15,
//     margin: 10,
//     backgroundColor: '#fff',
//     shadowColor: "black",
//     width: 331,

//   }
// })