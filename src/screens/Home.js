import React, { useState, useCallback, useEffect} from 'react';
import { StyleSheet, Alert, Text, View, AsyncStorage, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import TaskList from '../components/TaskList/index';
import Modal from  'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import Login from  './Login'; 

export default function Home ({navigation}) {

  const [ visible, setVisible] = useState(false)

  const [ color, setColor] = useState(false)
  
   const [task, setTask] = useState([]);
   const [open, setOpen] = useState(false);
   const [input, setInput] = useState('');

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
   
    const handleDelete = useCallback((data) => {
      const find = task.filter(r => r.key !== data.key);
      setTask(find);
    })
   
  

     return(

      
       <SafeAreaView style={styles.container}>
         <StatusBar backgroundColor='#BEBEBE' barStyle="light-content"/>

         <View style={styles.content}>
           <Text style={styles.textAtendimentos}>Atendimentos para realizar</Text>
           </View>

           <FlatList
           marginHorizontal={10}
           showsHorizontalScrollIndicator={false}
           data={task}
           keyExtractor={ (item) => String(item.key) }
           renderItem={ ({item}) => <TaskList data={item} handleDelete={handleDelete} />}
           />

           <TouchableOpacity style={styles.exitButtom}
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
          )}>
             <Text >Sair</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.openModal}
            onPress={() => {setVisible(true)}}> 
             <Ionicons name="md-bulb" size={35} color="#FFFFFF"/>
           </TouchableOpacity>

           <Modal 
           isVisible={visible}
           onBackdropPress={() => setVisible(false)}
           >
             <View style={styles.modalStyles}>
               <Text>Atenção Veterinário!</Text>
               <Text>Cada item desta lista é um atendimento para realizar!</Text>
               <Text>Quando for aceitar um pedido para atender, salve todos os dados e clique no botão azul para aceitar!</Text>
             </View>
           </Modal>
       </SafeAreaView>
       
     )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title:{
    marginTop:15,
    paddingBottom:10,
    fontSize:33,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  exitButtom:{
    backgroundColor: "#d22222",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: 40,
    borderRadius: 10,
    marginTop: 5,
  },
  openModal:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 20,
    bottom: 25,
    elevation: 4,
  },
  modalStyles:{
    backgroundColor: 'white', 
    height: 150, 
    width: '80%', 
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textAtendimentos:{
    fontSize: 27,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 10,
    fontWeight: 'bold'
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
  input:{
    fontSize:15,
    marginLeft: 10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#FFF',
    padding:9,
    height:85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd:{
    backgroundColor: '#32CD32',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
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
