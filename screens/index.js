import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Hotbar from './hotbar';

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Welcome @user</Text>

      <View style={styles.contentContainer}>
        {/* Placeholder for a picture */}
      </View>

      <View style={styles.buttonContainer}>
        <Hotbar iconName="home" onPress={() => navigation.navigate("Index")} />
        <Hotbar iconName="apple" onPress={() => navigation.navigate("Findfruit")} />
        <Hotbar iconName="leaf" onPress={() => navigation.navigate("Findveggies")} />
        <Hotbar iconName="shopping-cart" onPress={() => navigation.navigate("Cart")} />
        <Hotbar iconName="map" onPress={() => navigation.navigate("FarmsNearMe")} />
        <Hotbar iconName="user" onPress={() => navigation.navigate("User")} />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  homeText: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 50,
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingBottom: 15, 
  },
});