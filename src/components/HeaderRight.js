import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import User from "../svgComponents/user";
import Notification from "../svgComponents/Notification";
import Menu from "../svgComponents/menu";
import UserWhite from "../../assets/user.svg";
import NotificationWhite from "../../assets/Notification.svg";
import MenuWhite from "../../assets/menu.svg";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function HederRight({ color }) {
    const navigation = useNavigation()
    const [currentUser,setUser]=useState()
    useFocusEffect(
        React.useCallback(() => {
          const checkAuthStatus = async () => {
            try {
              const currentUser = await Auth.currentAuthenticatedUser()
              setUser(currentUser)
            } catch (error) {
              setUser(null)
            }
          }
      
          checkAuthStatus()
        }, [])
      );
     
    return (
        <View
            style={styles.iconsContainer}>
            <TouchableOpacity style={styles.singleIcon} onPress={() =>{
                if(currentUser)
                navigation.navigate("Profile")
                else
                navigation.navigate("Login")

                }}>
                {color === 'white' ? <UserWhite /> : <User />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleIcon}
                onPress={() => navigation.navigate("Notifications")}>
                {color === 'white' ? <NotificationWhite /> : <Notification />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleIcon} onPress={() => navigation.navigate("Menu")}>
                {color === 'white' ? <MenuWhite /> : <Menu />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        paddingHorizontal: 0,
    },
    singleIcon: {
        padding: 10
    }
})