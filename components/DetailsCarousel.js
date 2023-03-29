import React, {useRef} from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';
import { sizes } from '../src/constants/theme';
import { FlatList } from "react-native-gesture-handler";

const DetailsCarousel = (slides, id) => {
    return (
        <FlatList 
        data={slides}
        horizontal
        pagingEnabled
        bounces={false}
        renderItem={({item: image, index}) => {
          if (!index) {
            return (
              <View style={styles.slide}>
                <SharedElement id={`trip.${id}.image`} style={styles.slide}>
                  <Image source={image} style={styles.image} />
                </SharedElement>
              </View>
            );
          }
          return (
            <View style={styles.slide}>
              <Image source={image} style={styles.image} />
            </View>
          );
        }}
      />
       )};
    


const styles = StyleSheet.create({
    slide: {
        width: sizes.width,
        height: sizes.height,
    },
    image: {
        width: sizes.width,
        height: sizes.height,
        resizeMode: 'cover'
    },
})

export default DetailsCarousel