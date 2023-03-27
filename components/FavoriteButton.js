import React from "react";
import { View } from "react-native";
import { colors } from "../src/constants/theme";
import Icon from "../src/components/icon";

const FavoriteButton = ({active, style}) => {
    return (
        <View style={[{
            backgroundColor: colors.white,
            padding: 4,
            borderRadius: 20,
        },
        style,
        ]}>
            <Icon icon="Favorite" size={24}/>
        </View>
    )
}


export default FavoriteButton