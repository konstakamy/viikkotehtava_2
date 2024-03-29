import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyModal from './MyModal'

const App = () => {
  return (
    <View style={styles.container}>
      <MyModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});

export default App;