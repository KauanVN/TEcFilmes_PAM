
import React from "react";

import { Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";


export default function CardMovies({titulo,preco,imagem,origem,tamanho}) {

  return (

    <TouchableOpacity style = {styles.containerFilmes}>

      <Image style = {styles.imagemFilmes} source={require(`../../Img/${imagem}`)} />

      <Text style = {styles.tituloFilmes}> {titulo}</Text>

    <Text style = {styles.notaFilmes}>Origem: {origem}</Text>

      <Text style = {styles.notaFilmes}>Tamanho: {tamanho}</Text>

      <Text style = {styles.notaFilmes}>{preco}</Text>

  




    </TouchableOpacity>

  );

}






