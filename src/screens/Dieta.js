import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SectionList, SafeAreaView, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const saudadesTasks = [
  {id: 1, title: 'Corresponde à fração da dieta fabricada na fazenda, que foi consumida pelo animal após a sua capacidade de seleção, e essa seleção envolve vários fatores. É preciso estar atento à palatabilidade dos alimentos, tamanho da partícula, mistura do concentrado ao volumoso, capacidade de consumo, período da lactação, disputa pelo cocho ou até mesmo pelo estado de saúde do animal naquele momento. Para tentar reduzir as diferenças entre os três tipos de dietas, o nutricionista deve submeter os ingredientes utilizados na dieta à análise para determinação de sua composição sempre que possível. Por outro lado, os colaboradores responsáveis pela fabricação e distribuição da dieta para os animais devem receber treinamentos rotineiramente, mantendo assim um bom manejo do trato.'},
]

const pinhalzinhoTasks = [
  {id: 11, title: 'Engloba a mistura dos ingredientes da dieta e fornecimento da mesma para os animais.'},
]

const saocarlosTasks = [
  {id: 21, title: 'Consiste no sincronismo ideal entre as exigências nutricionais dos animais, seja para crescimento, lactação ou gestação e a composição nutricional dos alimentos utilizados (proteínas, carboidratos, lipídios, vitaminas e minerais).'},
]

const DietaTasks = [
    {id: 31, title: 'Fisicamente, o teor de fibra da dieta é o fator que mais contribuiu para a restrição do consumo e vale lembrar que este pode ser avaliado através da porcentagem de FDN na dieta. O rebanho deve consumir no máximo 1,1 – 1,2% do peso vivo de FDN na dieta total para evitar, teoricamente, o enchimento físico do rúmen e consequentemente limitar o consumo. É preciso entender que quanto maior o teor de fibra dos alimentos, menor será o seu valor nutricional. Isso acontece, pois alimentos ricos em fibra tem degradação mais lenta no rúmen, resultando em menor taxa de passagem do alimento pelo trato digestivo do animal. Dessa forma, os receptores de pressão de baixo limiar que estão presentes no rúmen, ao captarem a distensão ruminal, irão inibir o consumo por mecanismo de feedback ao sistema nervoso central. Vale ressaltar que a capacidade de distensão do rúmen varia conforme a produção de leite do animal afinal, quanto maior a produção de leite, maior será a necessidade em consumir alimentos e consequentemente maior a tolerância do animal quanto à distensão do rúmen. No que diz respeito à regulação metabólica pelo animal, o sincronismo entre os teores de proteína e energia é de extrema importância. Quando esses nutrientes estão desbalanceados, excedendo ás exigências nutricionais dos animais, por exemplo, o consumo é limitado.'},
    {id: 32, title: 'fonte: https://prodap.com.br/pt/blog/manejo-alimentar-para-bovinos-de-leited'}  
]

 export default class Dieta extends Component {

   render (){
       return (
        <View style={ styles.container}>
          <SectionList
            sections = {[
              {title: "Dieta consumida pelo animal", data: saudadesTasks},
              {title: "Dieta fabricada na fazenda", data: pinhalzinhoTasks},
              {title: "A dieta formulada pelo nutricionista", data: saocarlosTasks},
              {title: "Entenda mais como o animal reage aos nutrientes", data: DietaTasks}
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