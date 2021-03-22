import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button } from 'react-native';
//import CounterInput from "react-native-counter-input";

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Hello Manan Press me.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('You have successfully pressed')}
      />
    </View>
    <View>
    {/* <CounterInput
  onChange={(counter) => {
    console.log("onChange Counter:", counter);
  }}
/> */}
    </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;