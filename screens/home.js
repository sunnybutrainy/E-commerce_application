import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const navigation = useNavigation();

  return (
  
    // <ImageBackground
    //   source={require("../assets/logo.png")}
    //   style={Styles.background}
    //   resizeMode="cover" 
    // >
    <View style={Styles.container}>

      <Text style={Styles.HomeText}>Deliberry</Text>
    
      <View style={Styles.ButtContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login", { screen: 'Login' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register", { screen: 'Register' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ImageBackground>
  )
}

export default Home;


const Styles = StyleSheet.create({
  background: {
    flex: 1,  
    width: '100%',  
    height: '100%',  
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //justifyContent: "flex-start"
  },
  ButtContainer: {
    flex:1,
    justifyContent: "flex-end",
    padding: 20,
  },
  HomeText: {
    fontSize: 60,
    fontWeight: '800',
    textAlign: "center",
  },
  NextBottom: {
    backgroundColor: '#9803fc',
    bottom: 10,
    padding: 10,
    marginTop: "17%",
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