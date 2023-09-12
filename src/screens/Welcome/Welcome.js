import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = (props) => {
  const { navigation} = props;

  // Render the WelcomeScreen content if loading is complete
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Life Changer </Text>
      <Image source={require("../../../assets/tree-icon.png")} style={styles.image}/>

      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5', // Background color
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333', // Text color
      textTransform: 'uppercase',
    },
    image: {
      width: '100%',
      height: '50%',
      resizeMode: 'contain',
      marginBottom: 30,
    },
    startButton: {
      backgroundColor: '#007AFF', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 75,
      borderRadius: 30,

      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonText: {
      color: '#FFF', // Button text color
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default WelcomeScreen;

