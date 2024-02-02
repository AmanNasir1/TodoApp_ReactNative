import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { saveUserInfo } from '../store/authReducer'
import tw from "twrnc"
import UserIcon from '../icon/UserIcon'
import { useQuery } from '@tanstack/react-query'
import UserList from '../Components/UserList'
import CustomHeader from '../Components/CustomHeader'

const Profile = () => {
  const userInfo = useSelector(saveUserInfo)

  const { isSuccess, data } = useQuery({
    queryKey: ['myKey'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return response.json();
    },
  });

  return (
    <View style={tw`mt-1`}>
      <CustomHeader title="Profile" />
      <View style={tw`flex items-center mt-5`}>
        <View style={tw`bg-gray-200 rounded-full p-5`}>
          <UserIcon />
        </View>
        <Text style={tw` text-2xl text-black font-bold`}>Name</Text>
        <Text style={tw`text-lg text-black `}>{userInfo[1]}</Text>
      </View>
      <Text style={tw` text-2xl text-black font-bold ml-5 mt-6`}>Friends</Text>

      {isSuccess ? <FlatList style={tw`flex flex-grow`} contentContainerStyle={{ paddingBottom: 250 }} showsVerticalScrollIndicator={false} data={data} renderItem={({ item }) => <UserList {...item} />} /> :
        <View style={tw`flex h-3/5  justify-center items-center`}><Text> <ActivityIndicator size="large" /></Text></View>
      }
    </View>
  )
}

export default Profile