import React, { useState } from "react";
import {Text, View, StyleSheet} from 'react-native';
import Icon from "../src/components/icon";
import icons from "../src/constants/icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes, spacing } from "../src/constants/theme";
// import { colors } from "../src/constants/theme";

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
            <Icon icon="Hamburger" onPress={() => {}}/>
            <Text styles={styles.title}>{title}</Text>
            <Icon icon="Notification" onPress={() => {}} />
        </View>
    ) 
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.l,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
    }
})

export default MainHeader