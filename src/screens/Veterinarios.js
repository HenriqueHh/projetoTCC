import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SectionList, SafeAreaView, KeyboardAvoidingView, Text, View, SegmentedControlIOS, InteractionManager } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const saudadesTasks = [
  {id: 1, title: 'Henrique Hohn - (49) 91122-3344'},
  {id: 2, title: 'Ayani Quadros  - (49) 92222-3754'},
  {id: 3, title: 'Leticia Sítima - (49) 91312-3984'},
  {id: 4, title: 'Lira Adarga - (49) 45667-3744'},
]

const pinhalzinhoTasks = [
  {id: 11, title: 'Lueji  - (49) 91172-3295'},
  {id: 12, title: 'Emanuel Nunes - (49) 94422-3754'},
  {id: 13, title: 'Filipe Frias - (49) 9852-3121'},
  {id: 14, title: 'Michael Mansilha - (49) 95577-3344'},
  {id: 15, title: 'Branca Luz Dinis - (49) 91122-3344'},
  {id: 16, title: 'Gilberto Pederneiras Caparica - (49) 91882-3452'},
  {id: 17, title: 'Moisés Cirne Minho - (49) 90162-3884'},
]

const saocarlosTasks = [
  {id: 21, title: 'Josefina Inês Gago - (49) 95332-3984'},
  {id: 22, title: 'Rubim Tigre Sobral - (49) 93342-3440'},
  {id: 23, title: 'Ester Mendes - (49) 91332-0002'},
  {id: 24, title: 'Isa Abelho Tabosa - (49) 98772-3094'},
  {id: 25, title: 'Flávio Temes - (49) 91342-3765'},
]

 export default class Veterinarios extends Component {

   render (){
       return (
        <View style={ styles.container}>
          <SectionList
            sections = {[
              {title: "Saudades-SC", data: saudadesTasks},
              {title: "Pinhalzinho-SC", data: pinhalzinhoTasks},
              {title: "São Carlos-SC", data: saocarlosTasks}
            ]}

            renderItem= {( { item } ) => (
              <View style={styles.row}>
                <Text>
                 {item.title}
                </Text>
              </View>
            )}

            renderSectionHeader= {( { section } ) => (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>
                  {section.title}
                </Text>
              </View>
            )}

            keyExtractor={(item) => item.id}

          />

        </View>
      )
    } 
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title:{
    marginTop: 10,
    textAlign:'center'
  },
  row:{
    paddingHorizontal: 20,
    paddingVertical:10,
    borderBottomColor: "#f3f3f3",
    borderBottomWidth: 1
  },
  section:{
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sectionHeader:{
    fontSize: 17,
    fontWeight: 'bold'
  }
});