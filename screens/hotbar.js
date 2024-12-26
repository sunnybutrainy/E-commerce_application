import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Hotbar = ({ iconName, iconSize = 30, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name={iconName} size={iconSize} color="white" />
    </TouchableOpacity>
  );
};

export default Hotbar;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9803fc',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});