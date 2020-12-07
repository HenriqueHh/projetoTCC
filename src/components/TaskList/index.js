import React, { useState} from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Modal from  'react-native-modal';

const Animatedbutton = Animatable.createAnimatableComponent(TouchableOpacity);

export default function TaskList ({ data, handleDelete, handleAdd}){

  
  const [ visible, setVisible] = useState(false)
  
    return(
       <TouchableOpacity 
       style={styles.container}
       animation="bounceIn"
       useNativeDriver
       onPress={() => {setVisible(true)}}
       >  
         <View>
            <Text style={styles.taskAtendimento}> Atendimento pendente (toque para ver) </Text>
         </View>

         <Modal 
           isVisible={visible}
           onBackdropPress={() => setVisible(false)}
           >
             <View style={styles.modalStyles}>
             <View>
                <Text style={styles.task}> {data.task} </Text>
             </View>
               <View style={styles.finalizar}>
                <TouchableOpacity  onPress={() => 
                      Alert.alert(
                      "Atenção!",
                      "Tem certeza que deseja finalizar este atendimento?",
                    [
                      {
                        text: "Não",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "Sim", onPress: () =>  handleDelete(data)}
                    ],
                    { cancelable: false }
                )
                }>
                  <Text>Finalizar</Text>
                </TouchableOpacity> 
                </View>
             </View>
           </Modal>

       </TouchableOpacity>
    )
}//onPress={handleAdd}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 8,
      height: 50,
      flexDirection:'row',
      alignItems:'center',
      borderLeftWidth: 5,
      borderLeftColor: '#006400',
      backgroundColor:'#dddddd',
      borderRadius: 2,
      padding:7,
      elevation: 3,
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowOffset:{
          width:1,
          height:3,
      }
    },
    taskAtendimento:{
     fontWeight: 'bold',
     paddingLeft: 5,
     fontSize: 17,
    }, 
    finalizar:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      height: 40,
      width: '60%',
      borderColor: '#00FF00',
      borderWidth: 4,
      borderRadius: 25,
      marginTop: 15
    },
    modalStyles:{
      backgroundColor: '#ffffff', 
      height: 200, 
      width: '90%', 
      borderRadius: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    teste:{
      marginLeft: 5,
      backgroundColor: '#b2b2b2',
      borderRadius: 5
    },
    task:{
        color: '#000000',
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 20,
    }
});

/*onPress={() => 
  Alert.alert(
      "Atenção maluco",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => props.navigation.navigate("Login") }
      ],
      { cancelable: false }
  )
  }*/

/*import React, { useRef} from 'react';
import { StyleSheet, ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { Modalize, modalize } from  'react-native-modalize';

export default function Config() {
  const modalizeRef  =useRef(null);

  function onOpen(){
    modalizeRef.current?.open();
  }

  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.buttomSuport} onPress={onOpen}>
           <Text style={{fontSize: 30}}>Suporte test</Text>
         </TouchableOpacity>

         <Modalize
           ref={modalizeRef}
           snapPoint={300}
           modalHeight={350}
           >
               <View style={{
                flex: 1,
                height: 300,
                justifyContent: 'center', 
                alignItems: 'center',
              }}>
                <View style={{marginBottom: 15}}>
                 <Text style={{fontSize: 20}}>Contato ao suporte técnico:</Text>
                 <Text style={{fontSize: 18}}>Whatsapp: (49) 99988-7766</Text>
                 <Text style={{fontSize: 18}}>E-mail: teste@mail.com</Text>
                </View>

                <View style={{marginBottom: 15}}>
                 <Text style={{fontSize: 20}}>Contato ao suporte Cleantec:</Text>
                 <Text style={{fontSize: 18}}>Whatsapp: (49) 99988-7766</Text>
                 <Text style={{fontSize: 18}}>E-mail: teste@mail.com</Text>
                </View>
               </View>
         </Modalize>
    </View>
 );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttomSuport:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
}); */