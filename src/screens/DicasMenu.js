import React from 'react';
import { StyleSheet, Text, TouchableOpacity,KeyboardAvoidingView, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons as Icon} from '@expo/vector-icons';

import Dieta from './Dieta';
import Home from './Home';
import Agua from './Agua';
import Manejo from './Manejo';


export default function DicasMenu ({navigation}) { 
  return (
    <View style={styles.container}> 
    
       <View style={styles.fab}>   
          <TouchableOpacity  style={styles.botao}
           onPress={() => {navigation.navigate(Dieta)}}
          >
           <Text >Sobre a Dieta</Text>
           <Ionicons name="ios-list" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>
        <View style={styles.fab}>   
          <TouchableOpacity style={styles.botao}
           onPress={() => {navigation.navigate(Agua)}}
          >
           <Text> Importância da água</Text>
           <Ionicons name="ios-water" size={55} color="#000000"/>
         </TouchableOpacity>
        </View >
        <View style={styles.fab}>      
          <TouchableOpacity style={styles.botao}
           onPress={() => {navigation.navigate(Manejo)}}
          >
           <Text >Práticas de manejo alimentar</Text>
           <Ionicons name="ios-bulb" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#A9A9A9',
  },
  botao:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000000'
  },
  fab: {
   flex: 1,
   height: 100,
   backgroundColor: '#A9A9A9',
   margin: 25,
   borderWidth: 1,
   borderColor: '#000000',
   borderRadius: 3,
  },
  textT:{
    
   }
});

