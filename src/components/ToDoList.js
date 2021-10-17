import React from 'react';
import ToDoItem from './ToDoItem';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {changeToDoStatusAction} from '../actions/creators';

function ToDoList({todo, changeToDoStatusAction}) {
  const {list, searchKey} = todo;
  return (
    <FlatList
      data={list.filter(item => item.text.includes(searchKey))}
      renderItem={({item, index, separators}) => {
        const isEven = index % 2 === 0;
        const isDone = item.status === 'done';
        return (
          <ToDoItem
            isEven={isEven}
            isDone={isDone}
            text={item.text}
            onPress={() => changeToDoStatusAction(item.id)}
          />
        );
      }}
      keyExtractor={item => item.id}
    />
  );
}

const mapStateToProps = ({todo}) => {
  return {
    todo,
  };
};

const mapDispatchToProps = {
  changeToDoStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
