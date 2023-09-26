
import React from "react";

import { Image, Text, TouchableOpacity} from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";


export default function CardItens({titulo,nota,imagem,sinopse}) {

    const navigation = useNavigation()

  return (

 
      
    <TouchableOpacity onPress ={() => navigation.navigate('details' , {titulo:titulo , imagem:imagem, nota:nota, sinopse:sinopse})} style = {styles.containerFilmes}>


              <Image style={styles.imagemFilmes} source={{uri:`https://image.tmdb.org/t/p/original/${imagem}`}} />

              <Text style={styles.tituloFilmes}> {titulo}</Text>

              <Text style={styles.notaFilmes}>{nota}</Text>

          </TouchableOpacity>

  );

}






