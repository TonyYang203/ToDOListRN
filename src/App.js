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

  createToDoItem = () => {
    const {inputValue, list} = this.state;

    const item = {
      id: new Date().getTime(),
      text: inputValue,
      status: 'not done',
    };

    const newList = [...list, item];

    this.setState(() => {
      return {
        inputValue: '',
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

  searchList = () => {
    this.setState(state => {
      return {
        filterKey: state.inputValue,
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
    const {list, inputValue, filterKey} = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.title}>My To Do List</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={this.onInputChange}
          />
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.createToDoItem}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.searchList}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleCompleteAll}>
              <Text style={styles.buttonText}>Complete All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={list.filter(item => item.text.includes(filterKey))}
          renderItem={({item, index, separators}) => {
            const backgroundColorStyle =
              index % 2 === 0 ? styles.itemEven : styles.itemOdd;
            const isDone = item.status === 'done';
            return (
              <TouchableOpacity
                style={[
                  styles.item,
                  backgroundColorStyle,
                  isDone && styles.itemDone,
                ]}
                onPress={this.changeItemStatus(item.id)}>
                <View style={[styles.tickArea, isDone && styles.tick]}></View>
                <Text style={[styles.itemText, isDone && styles.doneText]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default App;
