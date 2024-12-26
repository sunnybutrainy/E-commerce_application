import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import User from "./user";
import Address from "./address";

const RegisterCustomer = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <View style={Styles.container}>
      <View style={Styles.textContainer}>
      <User 
        username={username} setUsername={setUsername}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        isFarmer={false}
      />
      <Address
        streetAddress={streetAddress} setStreetAddress={setStreetAddress}
        city={city} setCity={setCity}
        postalCode={postalCode} setPostalCode={setPostalCode}
      />
      <TouchableOpacity
          onPress={() => navigation.navigate("Login", { screen: 'Login' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterCustomer;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  textContainer: {
    width: "80%", 
    alignItems: "center",
  },   
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  }
});
