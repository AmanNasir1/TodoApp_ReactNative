import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import moment from 'moment'
interface ITodoTask {
    id: number,
    taskName: string,
    taskDetails: string,
    startDate: Date,
    endDate: Date,
    handleDelete: any

}


const TodoList = ({ id, taskName, taskDetails, startDate, endDate, handleDelete }: ITodoTask) => {


    return (
        <View style={tw`flex flex-row justify-between items-center bg-white p-4 m-2 rounded-2xl`} >
            <View>
                <Text style={tw`text-lg  text-black `}>{taskName}</Text>
                <Text style={tw`text-sm `}>{moment(startDate).format("MMMM Do YYYY")}</Text>
            </View>
            <TouchableOpacity style={tw`bg-[#5F33E1] p-2 rounded-lg`} onPress={() => handleDelete(id)} >
                <Text style={tw`text-white font-bold`}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoList