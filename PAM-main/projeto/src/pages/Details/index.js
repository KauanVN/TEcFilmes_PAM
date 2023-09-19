import React from "react";
import { View, Text, Image,  StyleSheet, ScrollView  } from "react-native";
import {useRoute} from '@react-navigation/native';



export default function Details(){

    const route = useRoute();

return(



    <View style = {styles.container}>
     <ScrollView>

                <Image style = {styles.image} source={require(`../../Img/${route.params.imagem}`)}/>
      
     <Text style={styles.textNota}>
     {route.params.titulo}
    </Text>
     <Text style={styles.textTitulo}>
     {route.params.origem}
    </Text>
    <Text style={styles.textTitulo}>
     {route.params.tamanho}
    </Text>
    <Text style={styles.textTitulo}>
     {route.params.preco}
    </Text>
            
             
          
</ScrollView>
    </View>
)

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:"#643ee1",
        alignItems:"center",
    },
    myStarStyle: {
        marginTop:10,
        color: 'yellow',
        fontSize: 30,
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
      textNota:{
        fontSize:25,
        color: 'white',
        fontWeight:'bold',
        marginRight: 55,
        textAlign:'left',
      },
      textTitulo:{
        marginRight:500,
        fontSize:25,
        color: 'white',
        fontWeight:'bold',
        marginRight: 55,
        textAlign:'left'
        
      },
      image:{
        width:'100%',
        height:400,
        marginTop:15,
        borderRadius:5
    },

}
)
