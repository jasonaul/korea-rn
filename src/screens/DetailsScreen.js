import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "../components/icon";
import { colors, sizes, spacing } from "../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element"
import DetailsCard from "../../components/DetailsCard";
import * as Animatable from 'react-native-animatable';


const DetailsScreen = ({navigation, route}) => {
    const insets = useSafeAreaInsets()
    const {trip} = route.params;
    return (
        <View style={styles.container}>
            <Animatable.View 
            style={[styles.backButton, 
            {marginTop: insets.top}]}
            animation="fadeIn"
            delay={500}
            duration={400}
            easing="ease-in-out"
            >
                <Icon icon="ArrowLeft" 
                    style={styles.backIcon} 
                    onPress={navigation.goBack}
                />
            </Animatable.View>

        <SharedElement 
            id={`trip.${trip.id}.image`} 
            style={StyleSheet.absoluteFillObject}>

            <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
                <Image 
                source={trip.image} 
                style={[StyleSheet.absoluteFillObject, styles.image]}/>
                
            </View>
            </SharedElement>
            <DetailsCard trip={trip}/>
        </View>
        
    )
};

DetailsScreen.sharedElements = route => {
    const {trip} = route.params;
    return [{
        id: `trip.${trip.id}.image`
    }]
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        borderRadius: sizes.radius,
        // overflow: 'hidden'
            // NOTE: This was causing a rounded edge that didn't look good on larger devices. Leaving out for now
    },
    image: {
        width: sizes.width,
        height: sizes.height,
        resizeMode: 'cover',
    },
    backButton: {
        position: 'absolute',
        left: spacing.l,
        top: spacing.l,
        zIndex: 1,
    },
    backIcon: {
        tintColor: colors.white
    }
})

export default DetailsScreen