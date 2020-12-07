import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Alert, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import Home from './Home';
import Veterinarios from './Veterinarios';
import DicasMenu from './DicasMenu';
import Agenda from './Agenda';
import Login from './Login';
import Cadastrar from './Cadastrar';

export default function Menu ({navigation}) { 
  return (
    <View style={styles.container}> 
       <View style={styles.fab}>   
          <TouchableOpacity
          style={styles.atendimentos} 
          useNativeDriver
          animation="zoomInDown"
          duration={2000}
          onPress={() => {navigation.navigate(Cadastrar)}}
          >
           <Text >Atendimentos</Text>
           <Ionicons name="md-add-circle-outline" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>
        <View style={styles.fab}>   
          <TouchableOpacity 
          style={styles.vetCad} 
          useNativeDriver
          animation="zoomInDown"
          duration={2000}
          onPress={() => {navigation.navigate(Veterinarios)}}
          >
           <Text style={styles.textT}>Lista de Veterinários</Text>
           <Ionicons name="md-list-box" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>
        <View style={styles.fab}>   
          <TouchableOpacity 
          style={styles.dicasVet} 
          useNativeDriver
          animation="zoomInDown"
          duration={2000}
          onPress={() => {navigation.navigate("Dicas Menu")}}
          >
           <Text >Dicas do Veterinário</Text>
           <Ionicons name="md-bulb" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>
        <View style={styles.fab}>   
          <TouchableOpacity 
          style={styles.calendario} 
          useNativeDriver
          animation="zoomInDown"
          duration={2000}
          onPress={() => {navigation.navigate(Agenda)}}
          >
           <Text >Calendário</Text>
           <Ionicons name="md-calendar" size={55} color="#000000"/>
         </TouchableOpacity>
        </View>

      <View style={styles.containergoBack}>
        <TouchableOpacity 
        onPress={() => Alert.alert(
          "Atenção!",
          "Tem certeza que deseja sair?",
         [
           {
             text: "Não",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "Sim", onPress: () =>  {navigation.navigate(Login)}}
         ],
         { cancelable: false }
     )}
        style={styles.goBack}>
           <Text>Sair</Text>
         </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
  },
  fab: {
    flex: 1,
    height: 100,
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#000000'
   },
   goBack:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B22222',
    width: '60%',
    height: 40,
    borderRadius: 5,
   },
   containergoBack:{
    alignItems: 'center',
    justifyContent: 'center',
   }, 
   atendimentos: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#00FFFF',
   fontWeight: 'bold',
   borderWidth: 1,
   borderColor: '#000000'
  },
  vetCad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000000'
   },
   dicasVet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8C00',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000000'
   },
   calendario: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000000'
   },
   textT:{
     
   }
});

