import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Home from './Home';
import Menu from './Menu';

export default function Setting ({navigation}) { 
  return (
    <View style={styles.container}> 
       

       <Text style={styles.textPergunta}>Eu sou:</Text>
       <View style={styles.containerButton}>
         <TouchableOpacity 
         onPress={() => {navigation.navigate(Menu)}}
         style={styles.button}>
            <Text style={styles.textButton}>Agricultor</Text>
         </TouchableOpacity>
       
         <TouchableOpacity 
         onPress={() => {navigation.navigate(Home)}}
         style={styles.button}>
            <Text style={styles.textButton}>Veterinário</Text>
         </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
},
  containerButton:{
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      height: 200,
      elevation: 15,
      borderColor: '#000000',
      borderWidth: 1,
  },
  textPergunta:{
      fontSize: 25,
      marginBottom: 10
  },
  button:{
      backgroundColor: '#CFCFCF',
      elevation: 10,
      marginTop: 10,
      marginBottom: 10,
      width: '90%',
      height: 50,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
  },
  textButton:{
      fontSize: 20,
      fontWeight: 'bold',
  },
});

