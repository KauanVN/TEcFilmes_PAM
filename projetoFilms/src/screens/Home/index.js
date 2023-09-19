import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerFilmes from "../../components/bannerFilmes";
import Filmes from "../../data/movies"
import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import CardMovies from "../../components/cardFilmes";
import CardItens from "../../components/cardSeries/index"
import Series from "../../data/series"
import React,{useState, useeffect, useEffect} from "react";



export default function App() {

const [movies,setMovies] = useState ([]);

useEffect(()=> {

      async function getMovies(){
            try{
                  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=500d008d084d3903b3cb4305c1adbe9b&language=pt-br");
                  const data = await response.json();

                  console.log(data.results)
                  setMovies(data.results)
            }
            catch(error){
                  console.error("REQUISIÇÃO FALHOU",error)
            }

      }

      getMovies();

},[])

const [series,setSeries] = useState ([]);

useEffect(()=> {

      async function getSeries(){
            try{
                  const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=4dee10bc13d15de6ab0e510028720cf7&language=pt-br");
                  const data = await response.json();

                  console.log(data.results)
                  setSeries(data.results)
            }
            catch(error){
                  console.error("REQUISIÇÃO FALHOU",error)
            }

      }

      getSeries();

},[])


  return (

    <View style={styles.container}>

      <Header></Header>

      <SearchBar></SearchBar>

      <BannerFilmes></BannerFilmes>




      <View style={{width:"90%"}}>

      <FlatList


      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={movies}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        

        <CardMovies

        

        titulo = {item.title}

        nota = {item.vote_average}

        imagem = {item.poster_path}

        />

        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Series</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={series}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardItens

        
        titulo = {item.name}

        nota = {item.vote_average}

        imagem = {item.poster_path}

        />

        )}

      />

      </View>


    </View>

  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});