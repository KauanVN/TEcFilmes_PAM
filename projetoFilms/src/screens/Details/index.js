import React from "react";
import { View, Text, Image,  StyleSheet } from "react-native";
import {useRoute} from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Details(){

    const route = useRoute();

return(



    <View style = {styles.container}>

         
                 <Image style = {styles.image} source={{uri:`https://image.tmdb.org/t/p/original/${route.params.imagem}`}} />
               
               <Stars
                      default={10}
                      count={10}
                      half={true}
                      starSize={50} 
                      fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                      emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
               />




<Text style={styles.textNota}>{route.params.nota}</Text>
<Text style={styles.textTitulo}>{route.params.titulo}</Text>
{route.params.sinopse && <Text style={styles.textSinopse}>{route.params.sinopse}</Text>}

            
      
      </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },
  myStarStyle: {
    marginTop: 10,
    color: 'yellow',
    fontSize: 30,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  textNota: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTitulo: {
    fontSize: 24, // Altere o tamanho da fonte do título para 24
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Centralize o texto
    marginBottom: 10, // Adicione margem inferior para espaço
  },
  textSinopse: {
    fontSize: 16, // Altere o tamanho da fonte da sinopse para 16
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Centralize o texto
    marginHorizontal: 20, // Adicione margens horizontais para espaçamento
    marginTop: 20, // Adicione margem superior para espaçamento
  },
  image: {
    width: '90%',
    height: 400,
    marginTop: 15,
    borderRadius: 10,
  },
});