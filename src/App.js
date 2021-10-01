/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  header: {
    backgroundColor: '#f44336',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f44336',
    backgroundColor: '#fff',
    width: '80%',
    paddingVertical: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderColor: '#7c7c7c',
    borderWidth: 1,
    padding: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#555',
  },
});

const list = [{text: '1'}, {text: '2'}, {text: '3'}];

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>My To Do List</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Complete All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
         data={list}
         renderItem={({item}) => (
           <TouchableOpacity style={styles.item}>
             <Text style={styles.itemText}>{item.text}</Text>
           </TouchableOpacity>
         )}
         keyExtractor={item => item.text}
       /> */}
    </SafeAreaView>
  );
};

export default App;
