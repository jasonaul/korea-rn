import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { sizes, spacing, shadow, colors } from "../src/constants/theme";
import FavoriteButton from "./FavoriteButton";

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({list}) => {
    return (
        <FlatList 
        data={list}
        horizontal
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id} 
        renderItem={({item, index})=> {
        return (
        <TouchableOpacity style={{marginLeft: spacing.l, marginRight: index === list.length -1 ? spacing.l: 0}}>
            <View style={[styles.card, shadow.dark]}>
                <FavoriteButton style={styles.favorite} />
                <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
                </View>
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
            </View>
        </TouchableOpacity>
         );
         }
        } />
    )
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover'
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
    },
    title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
        textShadowColor: 'black',
        textShadowRadius: 10
    },
    location: {
        fontSize: sizes.h3,
        color: colors.white,
        textShadowColor: 'black',
        textShadowRadius: 15
    },
    favorite: {
        position: 'absolute',
        top: spacing.m,
        right: spacing.m,
        zIndex: 1,
    }
})

export default TopPlacesCarousel;