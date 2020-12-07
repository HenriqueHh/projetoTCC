import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SectionList, SafeAreaView, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const saudadesTasks = [
  {id: 1, title: 'De maneira geral, é mais provável que as vacas de leite confinadas consumam de forma mais assertiva, a dieta total formulada desde que a propriedade atenda os requisitos mínimos de manejo alimentar, tanto do ponto de vista nutricional, quanto operacional. Quando os animais são alimentados em cocheiras, seja em sistema intensivo durante o ano todo ou em sistema semi-intensivo em alguns períodos do ano, a divisão dos animais em lotes é recorrente.'},
]

const pinhalzinhoTasks = [
  {id: 11, title: 'Estas divisões tem como objetivo reunir um determinado número de animais com a mesma exigência nutricional ou com uma pequena variação, deixando o lote homogêneo. Dessa forma, o nutricionista pode desafiar os lotes com maior probabilidade em produzir mais leite e reduzir os custos de alimentação da propriedade, ao formular dietas com menor teor de proteína e energia para os animais mais avançados na curva de lactação.'},
]

const saocarlosTasks = [
  {id: 21, title: 'Os bovinos são animais que prezam pela rotina e isso significa que a qualidade da dieta fornecida, assim como os horários da alimentação são essenciais em qualquer fazenda para que produção de leite diária seja consistente. Pensando nisso, é necessário vistoriar e garantir que os animais estejam recebendo alimentos semelhantes e isso não é uma tarefa fácil. As silagens de milho, por exemplo, podem ter teores de umidade e tamanho de partículas diferentes, fazendo com que o consumo dos animais oscile. Silagens mais úmidas, com teor de matéria seca próximo a 30% facilitam o consumo e evitam a seleção dos animais durante a alimentação. No entanto, à medida que o teor de umidade aumenta, o alimento se torna mais perecível, ao ponto de reduzir o consumo devido a maior concentração de ácido butírico, o qual altera a palatabilidade da silagem. No que diz respeito ao tamanho de partícula das silagens, a moagem mais fina do alimento durante o processo de ensilagem ou durante a mistura do volumoso ao concentrado nos vagões forrageiros, pode elevar a taxa de passagem do alimento no trato gastrintestinal e acarretar aumento do consumo de matéria seca e de nutrientes. Contudo, a digestibilidade do alimento pode não aumentar devido ao fluxo da digesta ao longo do trato gastrointestinal estar mais rápido. Além disso, o aumento na taxa de passagem reduz o tempo de ruminação o que pode ser considerado como fator de risco à acidose ruminal, distúrbio alimentar que pode reduzir o consumo dos animais pela elevada produção de ácido lático e redução intensa do ph ruminal.'},
]

const DietaTasks = [
    {id: 31, title: 'Em relação à frequência e mistura de alimentação, é imprescindível que uma refeição alcance a outra, ou seja, deve haver sobra da dieta nas cocheiras entre os períodos em que a dieta for fornecida. Vale ressaltar nesse momento a diferença entre sobra e resto. A sobra consiste no alimento com a mesma aparência e temperatura similar à fornecida inicialmente. Já o resto, pode ser considerado como alimento azedo, quente ou estragado, é na verdade o que foi refugado pelos animais. Para atingir a porcentagem das sobras entre 3 e 5% da matéria natural fornecida, uma prática de manejo simples e eficaz é mexer na comida, para despertar a curiosidade dos animais estimulando-os a saírem do local de descanso em direção a cocheira. O padrão ouro nesse quesito é mexer ou empurrar a dieta a cada 30 minutos, duas horas após o seu fornecimento. É extremamente desejável que os animais recebam a dieta total, tendo como objetivo a mistura do concentrado com a forragem para diminuir seleção. Além disso, essa prática garante a ingestão e diminue a velocidade de consumo de grãos, fazendo com que os animais aumentem a produção de leite, tenham maior saúde de rúmen e consumam melhor os alimentos de baixa palatabilidade.'},
    {id: 32, title: 'fonte: https://prodap.com.br/pt/blog/manejo-alimentar-para-bovinos-de-leite'}  
]

 export default class Manejo extends Component {

   render (){
       return (
        <View style={ styles.container}>
          <SectionList
            sections = {[
              {title: "Práticas de manejo alimentar", data: saudadesTasks},
              {title: "Divisão de Lotes", data: pinhalzinhoTasks},
              {title: "Rotina", data: saocarlosTasks},
              {title: "Frequência e mistura da alimentação", data: DietaTasks}
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