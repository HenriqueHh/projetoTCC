import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SectionList, SafeAreaView, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const saudadesTasks = [
  {id: 1, title: 'A água pode ser considerada o nutriente mais importante para a vaca leiteira sendo utilizada em muitos processos fisiológicos, como por exemplo, desenvolvimento fetal, transporte, digestão e metabolismo dos nutrientes, controle da temperatura corporal, e é claro, produção de leite. Segundo Michel Wattiaux, da Universidade de Winsconsin, a produção de leite em uma fazenda diminui imediatamente na restrição ou ausência de água para os animais, afinal as vacas em lactação precisam ingerir aproximadamente 2,6 kg de água para produzir 1 litro de leite. A ingestão total de água pode ser calculada pela somatória da água contida nos alimentos (4,1 kg de água a cada 1 kg de matéria seca da dieta consumida) mais a água ingerida espontaneamente. Vale lembrar que 75% dá água é ingerida durante o dia enquanto 25% é ingerida a noite e 40 a 60% da necessidade de água é suprida após a ordenha.'},
]

const pinhalzinhoTasks = [
  {id: 11, title: 'Os bebedouros devem ser planejados e ergonômicos para facilitar a higienização e a renovação constante de água limpa. Cada bebedouro deve atender 15 a 20 vacas, com 5 a 10 cm lineares de acesso disponíveis para cada animal, 15 cm de profundidade e com vazão de 38 litros por minuto.'},
]

const saocarlosTasks = [
  {id: 21, title: 'A água é um componente depositado em grande quantidade durante o crescimento e dessa forma, é de grande importância para os animais jovens. Por mais que a maior parte da água ingerida venha do leite ou sucedâneo do leite que recebem, bezerros que tiveram disponibilidade de água à vontade além do fornecimento do leite são muito mais produtivos. Os número indicam que essem consomem 31% mais concentrado e têm desempenho 38% maior do que aqueles que receberam água somente via dieta líquida.'},
]

const DietaTasks = [
    {id: 31, title: 'Seja natural ou artificial é extremamente importante para os bovinos de leite, em especial para as raças de clima temperado manejadas em clima tropical. A sombra deve ser planejada de modo que esteja em uma distância próxima do cocho e da água. São necessários aproximadamente 5 metros quadrados de sombra por vaca, dispostos no sentido Norte/Sul. Para sombras naturais, o eucalipto é uma boa sugestão, devendo ser plantado em linhas duplas, com espaçamento de no mínimo 1,5 metros entre as mudas. Caso o produtor prefira sombras artificiais, o sombrite é uma boa opção. Nesse caso, é necessário projetá-lo com pé direito de 3 metros para facilitar a circulação do ar. Embora exista disponíveis no mercado sombrites com diferentes níveis de sombreamento, os materiais capazes de gerar acima de 80% de sombreamento são mais recomendados.'},
    {id: 32, title: 'fonte: https://prodap.com.br/pt/blog/manejo-alimentar-para-bovinos-de-leite'}  
]

 export default class Agua extends Component {

   render (){
       return (
        <View style={ styles.container}>
          <SectionList
            sections = {[
              {title: "A Importância da Água", data: saudadesTasks},
              {title: "Bebedouros", data: pinhalzinhoTasks},
              {title: "Água para animais jovens", data: saocarlosTasks},
              {title: "Sombreamento", data: DietaTasks}
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