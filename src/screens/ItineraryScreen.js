import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import React from 'react'

const ItineraryScreen = () => {
  return (
    <View 
    style={{ 
      flex: 1, 
      // alignItems: 'center', 
      // justifyContent: 'center' 
      }}>
      <View style={styles.table}>

      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column'
  },
  row: { 
    flexDirection: 'row',
  },
  rowBlue: {
    backgroundColor: 'blue',
  },
  rowWhite: {
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default ItineraryScreen