import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>Login</Text>

      <View style={Styles.buttonContainer}>
        
        <TouchableOpacity
          onPress={() => navigation.navigate("Index", { screen: 'Index' })}
          style={Styles.button}
        >
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>



  )
}


export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
})