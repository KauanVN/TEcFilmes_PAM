import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import CardItens from "../CardItens"
import Calcas from "../../data/calcas"
import CalcasMaisCompradas from "../../data/calcasMaisCompradas"


export default function CalcasPage() {

      return (

            <View style={styles.container}>

                  <ScrollView>


                        <View style={{ width: "90%" }}>

                              <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginRight: 75,
                                    textAlign: 'center'
                              }}> Mais comprados</Text>


                              <FlatList

                                    horizontal={true}

                                    showsHorizontalScrollIndicator={false}

                                    data={CalcasMaisCompradas}

                                    keyExtractor={(item) => item.id}

                                    renderItem={({ item }) => (





                                          <CardItens



                                                titulo={item.nome}

                                                preco={item.preco}

                                                imagem={item.imagem}

                                                origem={item.origem}

                                                tamanho={item.tamanho}

                                          />

                                    )}

                              />

                              <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginRight: 75,
                                    textAlign: 'center'
                              }}> Todos Produtos</Text>

                              <FlatList

                                    horizontal={true}

                                    showsHorizontalScrollIndicator={false}

                                    data={Calcas}

                                    keyExtractor={(item) => item.id}

                                    renderItem={({ item }) => (





                                          <CardItens



                                                titulo={item.nome}

                                                preco={item.preco}

                                                imagem={item.imagem}

                                                origem={item.origem}

                                                tamanho={item.tamanho}

                                          />

                                    )}

                              />

                        </View>
                  </ScrollView>

            </View>

      );

}




const styles = StyleSheet.create({

      container: {


            flex: 1,

            backgroundColor: "#643ee1",

            alignItems: "right",


      },

});