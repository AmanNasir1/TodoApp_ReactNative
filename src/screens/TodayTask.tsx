import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import tw from "twrnc"
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, todoTask } from '../store/authReducer';
import TodoList from '../Components/TodoList';
import moment from 'moment';
const TodayTask = () => {
    const [selectedDate, setselectedDate] = useState(moment())
    const todoList = useSelector(todoTask)
    const dispatch = useDispatch()
    const handleDelete = (taskName: string) => {
        dispatch(deleteTodo(taskName))
    }


    return (



        <View style={tw`flex-1`}>
            <CalendarStrip
                scrollable
                style={tw`pb-1 h-30  m-1 rounded-lg  `}
                numDaysInWeek={4}
                calendarHeaderStyle={{ color: "black", backgroundColor: "white", fontSize: 15, padding: 5, borderRadius: 9 }}
                dateNumberStyle={tw`text-black text-sm font-bold`}
                dateNameStyle={tw`text-black  text-sm font-bold`}
                dayContainerStyle={tw` bg-white h-18 rounded-3  w-15  `}
                selectedDate={selectedDate}
                highlightDateNameStyle={tw`text-sm text-white font-bold`}
                highlightDateNumberStyle={tw` text-sm text-white font-bold`}
                highlightDateContainerStyle={tw`bg-[#5F33E1]`}
                onDateSelected={(date) => setselectedDate(date)
                }
            />


            <FlatList data={todoList.filter(x => moment(x.startDate).format("MM-DD-YYYY") == moment(selectedDate).format("MM-DD-YYYY"))} renderItem={(item) => <TodoList id={item.index} taskName={item.item.taskName} taskDetails={item.item.taskDetails} startDate={item.item.startDate} endDate={item.item.endDate} handleDelete={handleDelete} />} />
        </View>
    )
}

export default TodayTask
