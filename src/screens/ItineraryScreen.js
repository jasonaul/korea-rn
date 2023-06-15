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
      <Text style={styles.rowCenter} >Tour Name: Friends of Korea</Text>
      <View style={styles.table}>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text style={styles.bold}>Date</Text></View>
            <View style={styles.cell}><Text style={styles.bold}>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 9</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text>Arrival </Text></Text></View>
          </View>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>Date</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Column Reserved {"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 9</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Arrival </Text></Text></View>
          </View>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>April 10</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Column Reserved {"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 12</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Arrival </Text></Text></View>
          </View>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>April 13</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Column Reserved {"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 14</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Arrival </Text></Text></View>
          </View>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>April 15</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Column Reserved {"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 16</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Arrival </Text></Text></View>
          </View>
          <View style={[styles.row, styles.rowBlue]}>
            <View style={styles.cell}><Text>April 17</Text></View>
            <View style={styles.cell}><Text>City</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Top Attractions </Text>{"\n"}Column Reserved {"\n"}</Text></View>
          </View>
          <View style={[styles.row, styles.rowWhite]}>
            <View style={styles.cell}><Text>April 18</Text></View>
            <View style={styles.cell}><Text>Seoul</Text></View>
            <View style={styles.cell}><Text><Text style={styles.bold}>Arrival </Text></Text></View>
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
    backgroundColor: '#52ffff',
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
  },
  rowCenter: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default ItineraryScreen