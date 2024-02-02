import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"

interface IUserProps {
    name: string,
    email: string,
}

const UserList = ({ name, email }: any) => {

    return (
        <View style={tw`bg-white rounded-lg p-2 flex flex-row items-center m-2`}>
            <View style={tw`w-10 h-10 rounded-full   bg-gray-500`}></View>
            <View style={tw`ml-3`}>

                <Text style={tw`text-base text-black font-medium `}>{name}</Text>
                <Text style={tw`text-sm text-gray-400`}>{email}</Text>
            </View>
        </View>
    )
}

export default UserList