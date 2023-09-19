import React from "react";

import { Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";

import { useNavigation } from "@react-navigation/core";


export default function CardItens({ titulo, preco, imagem, origem, tamanho }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress ={() => navigation.navigate('Details' , {titulo:titulo , imagem:imagem, preco:preco, origem:origem, tamanho:tamanho})} style={styles.containerFilmes}>
      <Image
        style={styles.imagemFilmes}
        source={require(`../../Img/${imagem}`)}
      />
        <Text style={styles.tituloFilmes}> {titulo}</Text>
          <Text style={styles.notaFilmes}>{origem}</Text>
            <Text style={styles.notaFilmes}>{tamanho}</Text>
            <Text style={styles.notaFilmes}>{preco}</Text>
    </TouchableOpacity>
  );
}
