import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";


import Filmes from "../../data/promocao";

import CardMovies from "../cardFilmes";

import CardItens from "../CardItens"

import Series from "../../data/maisComprados";



export default function Home() {

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
                              }}> Em promoção</Text>

                              <FlatList

                                    horizontal={true}

                                    showsHorizontalScrollIndicator={false}

                                    data={Filmes}

                                    keyExtractor={(item) => item.id}

                                    renderItem={({ item }) => (



                                          <CardMovies




                                                titulo={item.nome}

                                                preco={item.preco}

                                                imagem={item.imagem}

                                                origem={item.origem}

                                                tamanho={item.tamanho}

                                          />

                                    )}

                              />

                        </View>

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

                                    data={Series}

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