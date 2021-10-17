/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import configureStore from './store/configureStore';

const store = configureStore();

const styles = StyleSheet.create({
  root: {},
});

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <SafeAreaView style={styles.root}>
          <Header />
          <ToDoList />
        </SafeAreaView>
      </ReduxProvider>
    );
  }
}

export default App;
