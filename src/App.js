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
  constructor(props) {
    super(props);
    this.state = {
      filterKey: '',
      inputValue: '',
      list: [],
    };
  }

  onInputChange = text => {
    this.setState(() => {
      return {
        inputValue: text,
      };
    });
  };

  createToDoItem = item => {
    const {list} = this.state;

    const newList = [...list, item];

    this.setState(() => {
      return {
        list: newList,
      };
    });
  };

  changeItemStatus = id => {
    const {list} = this.state;
    const index = list.findIndex(item => item.id === id);

    const nowItem = list[index];

    const newStatus = nowItem.status === 'done' ? 'not done' : 'done';

    list[index] = {
      ...nowItem,
      status: newStatus,
    };

    this.setState(() => {
      return {
        list: [...list],
      };
    });
  };

  searchList = filterKey => {
    this.setState(() => {
      return {
        filterKey,
      };
    });
  };

  handleCompleteAll = () => {
    this.setState(state => {
      return {
        list: state.list.map(item => {
          return {
            ...item,
            status: 'done',
          };
        }),
      };
    });
  };

  render() {
    const {list, filterKey} = this.state;
    return (
      <ReduxProvider store={store}>
        <SafeAreaView style={styles.root}>
          <Header
            searchList={this.searchList}
            createToDoItem={this.createToDoItem}
            handleCompleteAll={this.handleCompleteAll}
          />
          <ToDoList
            list={list.filter(item => item.text.includes(filterKey))}
            changeItemStatus={this.changeItemStatus}
          />
        </SafeAreaView>
      </ReduxProvider>
    );
  }
}

export default App;
