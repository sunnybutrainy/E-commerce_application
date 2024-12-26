import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>Register</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("Registercustomer", { screen: 'Registercustomer' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>Register as Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Registerfarmer", { screen: 'Registerfarmer' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>Register as Merchant</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
    margin: 100,
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
})