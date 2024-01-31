import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { saveUserInfo } from '../store/authReducer'
import tw from "twrnc"

import auth from "@react-native-firebase/auth"
import UserIcon from '../icon/UserIcon'
import { useQuery } from '@tanstack/react-query'

const Profile = async () => {



  const user = auth().currentUser
  const userInfo = useSelector(saveUserInfo)

  return (
    <View style={tw`mt-4`}>
      <View style={tw`flex items-center mt-5`}>
        <View style={tw`bg-gray-400 rounded-full p-5`}>
          <UserIcon />
        </View>
        <Text style={tw` text-2xl text-black font-bold`}></Text>
        <Text style={tw`text-lg text-black `}>{user?.email}</Text>
      </View>
      <View>
        <Text style={tw` text-2xl text-black font-bold ml-5 mt-6`}>Friends</Text>
      </View>
    </View>
  )
}

export default Profile