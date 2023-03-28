import React from "react";
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import HomeScreen from "../screens/HomeScreen";

const Stack = createSharedElementStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{
                headerShow: false,
                useNativeDriver: true,
            }}
        />
        </Stack.Navigator>
    )
}



export default HomeNavigator