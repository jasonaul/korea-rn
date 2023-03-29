import React from "react";
// import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { StatusBar } from "react-native";
import DetailsScreen from "../screens/DetailsScreen";
import {createSharedElementStackNavigator} from "react-navigation-shared-element"

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
    return (
    <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator>
            <Stack.Screen  name="Root" component={TabNavigator} 
            options={{
                headerShown: false,
                useNativeDriver: true,
                gestureEnabled: false
            }}/>
            <Stack.Screen name="DetailsScreen" 
                component={DetailsScreen} 
                options={{
                headerShown: false,
                useNativeDriver: true,
                gestureEnabled: false,
                cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
        </Stack.Navigator>
    </NavigationContainer>
);
};

export default MainNavigator;