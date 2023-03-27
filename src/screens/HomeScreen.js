import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import { colors } from '../constants/theme';
import MainHeader from '../../components/MainHeader';
import ScreenHeader from '../../components/ScreenHeader';
import TopPlacesCarousel from '../../components/TopPlacesCarousel';
import SectionHeader from '../../components/SectionHeader';
import TopAttractions from '../../components/TopAttractions';
import { TOP_PLACES, PLACES, TOP_ATTRACTIONS } from '../data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Korea - April 8 - 20" />
      <ScreenHeader  mainTitle="Korea Trip" secondTitle="April 8 - 20, 2023" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader 
        title="Top Attractions" 
        buttonTitle="See All" 
        onPress={() => {}}
          />
        <TopAttractions list={TOP_ATTRACTIONS} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  }
})

export default HomeScreen