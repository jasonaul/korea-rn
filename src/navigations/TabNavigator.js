import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen";
import ItineraryScreen from "../screens/ItineraryScreen";
import HotelsScreen from "../screens/HotelsScreen";
import ThingsToDoScreen from "../screens/ThingsToDoScreen";
// import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
// import { Image } from "react-native";
// import icons from "../constants/icons";
import Icon from "../components/icon";
import { colors, sizes } from "../constants/theme";
import { Animated, StyleSheet } from "react-native";
import HomeNavigator from "./HomeNavigator";

const tabs = [
    {
        name: 'Home',
        screen: HomeNavigator,
    },
    {
        name: 'Itinerary',
        screen: ItineraryScreen,
    },
    {
        name: 'Hotels',
        screen: HotelsScreen,
    },
    {
        name: 'Things',
        screen: ThingsToDoScreen,
    }
]

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const offsetAnimation = React.useRef(new Animated.Value(0)).current;
    return (
        <>
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? colors.primary : colors.gray,
                      }}
                    />
                );
            }
        }} 
            listeners={{
                focus: () => {
                    Animated.spring(offsetAnimation, {
                        toValue: index * (sizes.width / tabs.length),
                        useNativeDriver: true
                    }).start()
                }
            }}

        />
        )})}
        

    </Tab.Navigator>
    <Animated.View style={[styles.indicator, {
        transform: [{
            translateX: offsetAnimation,
        }]
    }]}/>
    </>
    );
}

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        width: 10,
        height: 2, 
        left: sizes.width / 3 /2 - 22,
        bottom: 1,
        backgroundColor: colors.primary,
        zIndex: 100,
    }
})

export default TabNavigator;


        {/* <Tab.Screen name="Itinerary" component={ItineraryScreen} options={{
            tabBarIcon: () => {
                return (
                <Image source={icons.Itinerary} resizeMode="cover" style={{
                    width: 40,
                    height: 40,
                }} />
                );
            }
        }} />
        <Tab.Screen name="Hotels" component={HotelsScreen} options={{
            tabBarIcon: () => {
                return (
                <Image source={icons.Hotels} resizeMode="cover" style={{
                    width: 40,
                    height: 40,
                }} />
                );
            }
        }} />
        <Tab.Screen name="Things to Do" component={ThingsToDoScreen} options={{
            tabBarIcon: () => {
                return (
                <Image source={icons.Tour} resizeMode="cover" style={{
                    width: 40,
                    height: 40,
                }} />
                );
            }
        }} /> */}