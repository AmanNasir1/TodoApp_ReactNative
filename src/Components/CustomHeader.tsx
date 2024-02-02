import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../icon/BackIcon';
import LogoutIcon from '../icon/LogoutIcon';
import auth from "@react-native-firebase/auth"
import { useDispatch } from 'react-redux';
import { logOut } from '../store/authReducer';
import Toast from 'react-native-toast-message';
interface ITitle {
    title: string
}

const CustomHeader = ({ title }: ITitle) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const handleLogout = () => {
        auth().signOut().then(() => {
            dispatch(logOut())
            Toast.show({ type: "success", text1: "User Logout", })

        });
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>{title}</Text>
            <TouchableOpacity onPress={handleLogout}>
                <LogoutIcon />
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;