import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import tw from "twrnc"
import moment from 'moment';

interface IModal {
    isModalVisible: boolean,
    toggleModal: () => void,
    taskName: string,
    taskDetails: string,
    startDate: string,
    endDate: string
}


const TodoModal = ({ isModalVisible, toggleModal, taskName, taskDetails, startDate, endDate }: IModal) => {
    return (
        <View >
            <Modal isVisible={isModalVisible} backdropOpacity={0.8}  >
                <View style={tw`p-4 bg-[#5F33E1] rounded-lg  flex items-center  `}>
                    <View style={tw`flex flex-row items-center`}>

                        <Text style={tw`text-white text-base`}>Task Name:</Text><Text style={tw`ml-3 text-lg text-white font-bold`}> {taskName} </Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>

                        <Text style={tw`text-white  text-base`}>Task Details:</Text><Text style={tw` text-lg text-white font-bold`}> {taskDetails}</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>

                        <Text style={tw`text-white   text-base`}>Start Date:</Text><Text style={tw`ml-1 text-lg text-white font-bold`}> {moment(startDate).format("MM-DD-YYYY")}</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <Text style={tw`text-white  text-base`}>End Date:</Text><Text style={tw`ml-1 text-lg text-white font-bold`}> {moment(endDate).format("MM-DD-YYYY")}</Text>
                    </View>
                    <TouchableOpacity style={tw`bg-white px-5 py-2 mt-5 rounded-lg`} onPress={toggleModal}>
                        <Text style={tw`text-[#5F33E1] font-bold`}>Hide</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default TodoModal