
import React from "react";

import { Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";

export default function CardMovies({titulo,nota,imagem}) {


    const navigation = useNavigation()

  return (

    <TouchableOpacity onPress ={() => navigation.navigate('details' , {titulo:titulo , imagem:imagem, nota:nota})} style = {styles.containerFilmes}>

      <Image style = {styles.imagemFilmes} source={require(`../../Img/${imagem}`)} />

      <Text style = {styles.tituloFilmes}> {titulo}</Text>

      <Text style = {styles.notaFilmes}>{nota}</Text>

    </TouchableOpacity>

  );

}






