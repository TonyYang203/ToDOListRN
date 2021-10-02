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
  item: {
    paddingVertical: 17,
    flexDirection: 'row',
  },
  itemOdd: {
    backgroundColor: '#eee',
  },
  itemEven: {
    backgroundColor: '#f9f9f9',
  },
  itemDone: {
    backgroundColor: '#888',
  },
  itemText: {
    marginLeft: 10,
  },
  doneText: {
    color: '#fff',
    textDecorationLine: 'line-through',
  },
  tickArea: {
    marginHorizontal: 10,
    transform: [{rotate: '45deg'}],
    height: 14,
    width: 8,
  },
  tick: {
    borderBottomColor: '#fff',
    borderRightColor: '#fff',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});

const list = [
  {id: 1, text: 'to do 1'},
  {id: 2, text: 'to do 2'},
  {id: 3, text: 'to do 3'},
];

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
      <FlatList
        data={list}
        renderItem={({item, index, separators}) => {
          const backgroundColorStyle =
            index % 2 === 0 ? styles.itemEven : styles.itemOdd;
          return (
            <TouchableOpacity
              style={[styles.item, backgroundColorStyle, styles.itemDone]}>
              <View style={[styles.tickArea, styles.tick]}></View>
              <Text style={[styles.itemText, styles.doneText]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
