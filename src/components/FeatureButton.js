import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderColor: '#7c7c7c',
    borderWidth: 1,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: '#555',
  },
});

function FeatureButton({text, onPress, ...etc}) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} {...etc}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default FeatureButton;
