import { StyleSheet, } from "react-native";

import { createStackNavigator } from '@react-navigation/stack'; // Adicione esta importação

import Routes from "./src/routes";


export default function App() {


  return (

   <Routes>
</Routes>

  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});