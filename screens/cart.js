import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

const Cart = ({ textField1, settextField1 }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Cart</Text>
      <TextInput
        placeholder="Text Input Field"
        value={textField1}
        onChangeText={settextField1}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  textContainer: {
    width: "80%", 
    alignItems: "center",
  },   
  heading: {
    fontSize: 36,
    textAlign: "center",
  },
});
