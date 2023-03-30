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
      <Text>Header?</Text>
      <View style={styles.table}>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>Date</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Line Break Test {"\n"} Another Line Break</Text></View>
          </View>
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
  },
  bold: {
    fontWeight: 'bold'
  }
})

export default ItineraryScreen