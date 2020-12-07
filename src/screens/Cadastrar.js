import React, { useState, useCallback, useEffect} from 'react';
import { StyleSheet, Text, View, AsyncStorage, SafeAreaView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default function Cadastrar ({navigation}) {
  
   const [task, setTask] = useState([]);
   const [open, setOpen] = useState(false);
   const [input, setInput] = useState('');
   const [name, setName] = useState('');
   const [local, setLocal] = useState('');
   const [contato, setContato] = useState('');

//Buscando todos os atendimentos quando abrir o app
   useEffect(() => {
      
    async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem('@task')

      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks()

   }, [])

   //Salvbando caso tenha algum atendimento alterado
   useEffect(() => {

      async function saveTasks(){
        await AsyncStorage.setItem('@task', JSON.stringify(task));
      }

      saveTasks();

   }, [task]);

   function handleAdd(){
     if(input && name && local && contato === '')return;

     const data = {
       key: [name, local, contato, input],
       task: ["Nome: ",name, " - Local: ", local, " - Contato: ", contato, " - Descrição: ", input],
     };

     setTask([...task, data]);
     setOpen(false);
     setInput('');
     setName('');
     setLocal('');
     setContato('');
   }
  

     return(
              <SafeAreaView style={styles.modal}>
         
                <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
                    
                <TextInput
                    multiline={true}
                    placeholderTextColor="#747474"
                    autoCorrect={false}
                    placeholder="Nome"
                    style={styles.inputName}
                    value={name}
                    onChangeText={(texto) => setName(texto)}
                    />
                   
                   <TextInput
                    multiline={true}
                    placeholderTextColor="#747474"
                    autoCorrect={false}
                    placeholder="Localização"
                    style={styles.inputName}
                    value={local}
                    onChangeText={(texto) => setLocal(texto)}
                    />

                    <TextInput
                    multiline={true}
                    placeholderTextColor="#747474"
                    autoCorrect={false}
                    placeholder="Contato"
                    style={styles.inputName}
                    value={contato}
                    onChangeText={(texto) => setContato(texto)}
                    />

                    <TextInput
                    multiline={true}
                    placeholderTextColor="#747474"
                    autoCorrect={false}
                    placeholder="Descrição"
                    style={styles.input}
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                    />


                    <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
                      <Text style={styles.handleAddText}> Enviar </Text>
                    </TouchableOpacity>
                 </Animatable.View>
                </SafeAreaView>
     )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#DCDCDC'
  },
  title:{
    marginTop:15,
    paddingBottom:10,
    fontSize:33,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  fab:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3,
    }
  },
  modal:{
    flex:1,
    backgroundColor: '#BEBEBE',
  },
  modalHeader:{
    marginTop: 20,
    marginLeft:10,
    flexDirection: 'row',
    alignItems:'center'
  },
  modalTitle:{
    marginLeft:15,
    fontSize: 23,
    color: '#FFF'
  },
  modalBody:{
    marginTop:15,
  },
  inputName:{
    fontSize:15,
    borderLeftColor: "#006400",
    borderLeftWidth: 4,
    marginLeft: 10,
    marginRight:10,
    marginTop:8,
    backgroundColor:'#FFF',
    padding:9,
    height:40,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 2,
    elevation: 5,
  },
  input:{
    fontSize:15,
    borderLeftColor: "#006400",
      borderLeftWidth: 4,
    marginLeft: 10,
    marginRight:10,
    marginTop:8,
    marginBottom: 15,
    backgroundColor:'#FFF',
    padding:9,
    height:85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 2,
    elevation: 5,
  },
  handleAdd:{
    backgroundColor: '#32CD32',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 2,
    elevation:5
  },
  handleAddText:{
    fontSize: 20,
  },
  BottomTarefas:{
    backgroundColor: '#00FFFF',
    fontSize: 24,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    marginVertical: 10
  }
});
