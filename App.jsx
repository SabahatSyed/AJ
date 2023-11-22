/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'//splash screen

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Icon from 'react-native-vector-icons/Ionicons';

import Blueteams from "./src/svgComponents/blueteamsicon";
import Blueshop from "./src/svgComponents/shopblue";
import Bluehome from "./src/svgComponents/homeicon";
import Bluetickets from "./src/svgComponents/bluetickets";
import Grayteams from "./src/svgComponents/grayteams";
import Grayshop from "./src/svgComponents/shopgray";
import Grayhome from "./src/svgComponents/grayicon";
import Graytickets from "./src/svgComponents/ticket";
import User from "./src/svgComponents/user";
import Notification from "./src/svgComponents/Notification";
import Menu from "./src/svgComponents/menu";
import Userwhite from "./src/svgComponents/userWhite";
import Notificationwhite from "./src/svgComponents/Notificationwhite";
import Menuwhite from "./src/svgComponents/menuwhite";


import login from './src/pages/login';


import dashboard from './src/pages/dashboard';

//import { Image } from 'react-native-svg';
import HeaderRight from './src/components/HeaderRight';
import HeaderLeft from './src/components/HeaderLeft'
import newsdetails from './src/pages/newsdetails'



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const MainTabNavigator = () => {
  const [hide, setHide] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          display: 'flex',
        },

        // showLabel: false,
        headerShown: false,
        // tabBarStyle:{
        //   height:'10%'
        // },

        tabBarIcon: ({focused, size}) => {
          let iconName;
          let label;
          let color;
          if (route.name === 'Home') {
            iconName = focused ? <Bluehome /> : <Grayhome />;
            color = focused ? '#002D62' : '#B3BFD1';
            label = 'Home';
          } else if (route.name === 'Teams') {
            iconName = focused ? <Blueteams /> : <Grayteams />;
            label = 'Teams';
            color = focused ? '#002D62' : '#B3BFD1';
          } // Customize the size based on the focused state
          else if (route.name === 'Shop') {
            iconName = focused ? <Blueshop /> : <Grayshop />;
            label = 'Shop';
            color = focused ? '#002D62' : '#B3BFD1';
          } else if (route.name === 'Tickets') {
            iconName = focused ? <Bluetickets /> : <Graytickets />;
            label = 'Tickets';
            color = focused ? '#002D62' : '#B3BFD1';
          }
          return (
            <React.Fragment>
              <View style={{flexDirection: 'column'}}>
                <View>{iconName}</View>
                <Text style={{color: color, fontSize: 10, fontWeight: 'bold'}}>
                  {label}
                </Text>
              </View>
            </React.Fragment>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          headerTitle: "Profile",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Item Details"
        component={itemdetails}
        options={{
          headerTitle: "Item Details",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen name="Home" component={HomeStackScreen} />
      {/* <Tab.Screen
        name="Notifications"
        component={notifications}
        options={{
          headerTitle: "Notifications",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen name="Teams" component={TeamsStackScreen} />

      <Tab.Screen name="Live" component={stats} options={{
        tabBarIcon:({focused})=>(
<Image source={require("./assets/Nav Item/Light.png")} resizeMode="contain" style={{width:30, height:30,zIndex:10 }}/>
        ),
        tabBarButton:(props)=>(
          <CustomTabBarButton {...props}/>
        )
      }} />
      {!hide && (
        <Tab.Screen
          name="Stats"
          component={stats}
          options={{
            headerTitle: 'Stats',
            headerLeft: ({navigation}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Image height={24} source={require('./assets/back.png')} />
              </TouchableOpacity>
            ),
            headerRight: ({navigation}) => (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}>
                  <User />
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}>
                  <Notification />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                  <Menu />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      )}

      {!hide && (
        <Tab.Screen
          name="Watch"
          component={watch}
          options={{
            headerTransparent: true,
            headerTitle: 'Watch',
            headerTintColor: '#fff',
            headerLeft: ({navigation}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Image height={24} source={require('./assets/back.png')} />
              </TouchableOpacity>
            ),
            headerRight: ({navigation}) => (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}>
                  <Userwhite />
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}>
                  <Notificationwhite />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                  <Menuwhite />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      )}
      {/* <Tab.Screen
        name="Cart"
        component={cart}
        options={{
          headerTitle: "Cart",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
             <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}

      <Tab.Screen name="Shop" component={ShopStackScreen} />
      {/* <Tab.Screen
        name="News"
        component={news}
        options={{
          headerTransparent: true,
          headerTitle: "News",
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Userwhite />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notificationwhite />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menuwhite />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen name="Tickets" component={TicketsStackScreen} />
      {/* <Tab.Screen
        name="Checkout"
        component={checkout}
        options={{
          headerTransparent: true,

          headerTitle: "Checkout",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
             <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ticket Details"
        component={ticketdetails}
        options={{
          headerTitle: "Ticket Details",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Icon name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <User />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Menu />
              </TouchableOpacity>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen?.hide();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [])

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          
          <Stack.Screen
            name="Login"
            component={login}
            options={{ headerShown: false }}
          />
         
          <Stack.Screen
            name="HomeTab"
            component={dashboard}
            options={{ headerShown: false }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles=StyleSheet.create({
  shadow:{
    shadowColor:"#000000",
    shadowOffset:{
      width:0,height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})