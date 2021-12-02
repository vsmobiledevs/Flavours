import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  const {BGCOLOR, ENV, API_URL} = Config;

  return (
    <SafeAreaView style={[styles.mainContainer, {backgroundColor: BGCOLOR}]}>
      <Text style={styles.nameTxtStyle}>{ENV}</Text>
      <Text style={styles.urlTxtStyle}>{API_URL}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxtStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  urlTxtStyle: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
    fontWeight: '500',
  },
});
