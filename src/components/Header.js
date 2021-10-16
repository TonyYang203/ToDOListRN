import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {
  completeAllAction,
  insertToDoAction,
  insertToDoThunk,
} from '../actions/creators';
import FeatureButton from './FeatureButton';

const styles = StyleSheet.create({
  root: {
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
});

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onInputChange = text => {
    this.setState(() => {
      return {
        inputValue: text,
      };
    });
  };

  onAddButtonPress = () => {
    const {inputValue} = this.state;

    const item = {
      id: new Date().getTime(),
      text: inputValue,
      status: 'not done',
    };

    this.setState(() => {
      return {
        inputValue: '',
      };
    });

    this.props.insertToDoThunk(item);
  };

  onSearchButtonPress = () => {
    this.props.searchList(this.state.inputValue);
  };

  render() {
    const {inputValue} = this.state;
    return (
      <View style={styles.root}>
        <Text style={styles.title}>My To Do List</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={this.onInputChange}
        />
        <View style={styles.buttonGroup}>
          <FeatureButton text={'Add'} onPress={this.onAddButtonPress} />
          <FeatureButton text={'Search'} onPress={this.onSearchButtonPress} />
          <FeatureButton
            text={'Complete All'}
            onPress={this.props.handleCompleteAll}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  insertToDoAction,
  insertToDoThunk,
  completeAllAction,
};

export default connect(null, mapDispatchToProps)(Header);
