import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600">OH HEY THERE JASON!!! Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
