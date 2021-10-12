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
import FeatureButton from './components/FeatureButton';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';

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

  changeItemStatus = id => () => {
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
      <SafeAreaView style={styles.root}>
        <Header
          searchList={this.searchList}
          createToDoItem={this.createToDoItem}
          handleCompleteAll={this.handleCompleteAll}
        />
        <FlatList
          data={list.filter(item => item.text.includes(filterKey))}
          renderItem={({item, index, separators}) => {
            const isEven = index % 2 === 0;
            const isDone = item.status === 'done';
            return (
              <ToDoItem
                isEven={isEven}
                isDone={isDone}
                text={item.text}
                onPress={this.changeItemStatus(item.id)}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default App;
