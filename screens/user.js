import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Address from "./address";

const User = ({ username, setUsername, email, setEmail, password, setPassword, isFarmer, farmName, setFarmName , phoneNumber, setphoneNumber }) => {
  return (

    <View style={Styles.Container}>
      <Text>{isFarmer ? "Register as a Merchant" : "Register as Customer"}</Text>
      <TextInput
        placeholder="Enter your Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
      />
    <TextInput
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setphoneNumber}
      />
      {isFarmer && (
        <TextInput
          placeholder="Enter your Farm Name"
          value={farmName}
          onChangeText={setFarmName}
        />
      )}
    </View>
  );
};

export default User;

const Styles = StyleSheet.create({

  Container: {
    width: "80%",          // Controls form width
    alignItems: "center",
  },   // Centers all items in this container

});