import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, sizes, spacing } from "../src/constants/theme";
import * as Animatable from 'react-native-animatable'
import BottomSheet from "@gorhom/bottom-sheet/src";



const DetailsCard = ({trip}) => {
    return (
        <View styles={styles.card}>
            <Animatable.View 
                style={styles.header} 
                animation="fadeInUp" 
                delay={500} 
                easing="ease-in-out"
                duration={400}>
                
                
                <Text style={styles.title}>{trip.title}</Text>
                <Text style={styles.location}>{trip.location}</Text>

            </Animatable.View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%' 
    },
    header: {
        paddingVertical: spacing.l + 50,
        paddingHorizontal: spacing.l,
    },
    title: {
        position: 'absolute',
        bottom: 75,
        left: 15,
        fontSize: sizes.title,
        fontWeight: 'bold',
        color: colors.white,
        textShadowColor: 'black',
        textShadowRadius: 10
    },
    location: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        fontSize: sizes.title,
        color: colors.white,
        textShadowColor: 'black',
        textShadowRadius: 10
    }
})


export default DetailsCard