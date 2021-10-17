import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingVertical: 17,
    flexDirection: 'row',
  },
  odd: {
    backgroundColor: '#eee',
  },
  even: {
    backgroundColor: '#f9f9f9',
  },

  text: {
    marginLeft: 10,
  },

  tickArea: {
    marginHorizontal: 10,
    transform: [{rotate: '45deg'}],
    height: 14,
    width: 8,
  },
});

const doneStyles = StyleSheet.create({
  tick: {
    borderBottomColor: '#fff',
    borderRightColor: '#fff',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  doneText: {
    color: '#fff',
    textDecorationLine: 'line-through',
  },
  doneBackground: {
    backgroundColor: '#888',
  },
});

const getDoneStyles = isDone => {
  if (!isDone) return {};

  return doneStyles;
};

function ToDoItem({text, isDone, isEven, onPress}) {
  const backgroundColorStyle = isEven ? styles.even : styles.odd;
  const doneStyles = getDoneStyles(isDone);
  return (
    <TouchableOpacity
      style={[styles.root, backgroundColorStyle, doneStyles.doneBackground]}
      onPress={onPress}>
      <View style={[styles.tickArea, doneStyles.tick]}></View>
      <Text style={[styles.text, doneStyles.doneText]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ToDoItem;
