import React, {useState} from 'react';
import { StyleSheet, ActivityIndicator, Alert, View, Image, Button, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase  from  "firebase" ;
import * as Animatable from 'react-native-animatable';
import { Ionicons} from '@expo/vector-icons';
import Setting from './Setting'

const AnimatedImage = Animatable.createAnimatableComponent(Image);

export default class Login extends React.Component { 

  

  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: '',
    }
  }

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyD3PkkKGQhx0AmMHYqo5RvjxZ5Zz-6sxrA",
        authDomain: "navet-32d09.firebaseapp.com",
        databaseURL: "https://navet-32d09.firebaseio.com",
        projectId: "navet-32d09",
        storageBucket: "navet-32d09.appspot.com",

        messagingSenderId: "591924525882",
        appId: "1:591924525882:web:86b90b83d68ca5cb0c2e03",
        measurementId: "G-T9CP97X3BD"
    };
    // Iniciando o firebase
    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }


  tryLogin() {
    this.setState({ isLoading: true, message: ''});
    const { mail, password } = this.state

    const loginUserSuccess = user => {
      this.setState({ message: 'Sucesso'});
      this.props.navigation.navigate('Setting');
    }

    const loginUserFailed = error => {
      this.setState({
        message: this.getMessageByErrorCode(error.code)
      });
    }

    firebase
    .auth()
    .signInWithEmailAndPassword(mail, password)
    .then(loginUserSuccess)
    .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Usuário não encontrado',
          'Deseja criar um cadastro com as informações inseridas?',
           [{
             text: 'Não', 
             onPress: () => console.log('Usuário não quer criar conta'),
             style: 'cancel'
            }, {
              text: 'Sim',
              onPress: () => {
                firebase
                   .auth()
                   .createUserWithEmailAndPassword(mail, password)
                   .then(loginUserSuccess)
                   .catch(loginUserFailed)
              }
            }],
            { cancelable: false}
            )
            return;
        }
        loginUserFailed(error);
    })
    .then(() => this.setState ({ isLoading: false}));
  }

  getMessageByErrorCode(errorCode){
     switch (errorCode){
       case 'auth/wrong-password':
          return 'Senha Incorreta';
       case 'auth/user-not-found':
         return 'Usuário não encontrado';
         default:
           return 'Erro desconhecido';
     }

  }

  renderMessage(){
     const { message } = this.state;
     if (!message)
         return null;

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }





  render() {

  return (
    <View style={styles.container}>    
      <AnimatedImage
      useNativeDriver
      animation="zoomInDown"
      duration={3000}
      source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
    
    <View  style={styles.input}>
      <Ionicons name="md-person" size={20} color={"#BEBEBE"}/>
      <TextInput
      
      placeholder="  Email"
      value={this.state.mail}
      onChangeText={value => this.onChangeHandler('mail', value)}
      />
      </View>

    <View style={styles.input}>
    <Ionicons name="md-lock" size={20} color={"#BEBEBE"}/>
      <TextInput 
      
      placeholder="  Password"
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={value => this.onChangeHandler('password', value)}
      />
    </View>
      
    <View style={styles.fabLogar}>
       {this.renderButton()}
       {this.renderMessage()}
    </View>
        

      </View>
  
  );
}

  renderButton(){
    if (this.state.isLoading)
    return <ActivityIndicator />;

    return(
      <Button
         style={styles.buttonEntrar}
         title="Entrar"
         onPress={() => this.tryLogin()}/>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200, 
    marginBottom: 20,
  },
  inputFlex:{
   flexDirection: 'row',
  },
  input: {
    marginTop: 10,
    width: 200,
    flexDirection: 'row',
    alignItems:'center',
    height: 40,
    paddingLeft: 5,
    backgroundColor: "#f2f2f2",
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  buttonEntrar:{
  },
  fabLogar:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  }
});

