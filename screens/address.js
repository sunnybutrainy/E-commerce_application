import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";

const Address = ({ city, setCity, postalCode, setPostalCode, streetAddress, setStreetAddress }) => {
  return (
    <View>
      <TextInput
        placeholder="Enter your street address"
        value={streetAddress}
        onChangeText={setStreetAddress}
      />
      <TextInput
        placeholder="Enter your city"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        placeholder="Enter your postal code"
        value={postalCode}
        onChangeText={setPostalCode}
      />
    </View>
  );
};

export default Address;
