import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from "./src/pages/Details";
import Home from "./src/pages/home/home";
import Search from "./src/components/searchbar";
import { Entypo, FontAwesome5,  MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';
import TenisPage from "./src/pages/tenis/tenis";
import CalcasPage from "./src/pages/calcas/calcas";
import CamisasPage from "./src/pages/camisas/camisas";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation} />
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#643ee1',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="procurar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Camisas"
        component={CamisasPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="tshirt" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Calças"
        component={CalcasPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-archive-sharp" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Tenis"
        component={TenisPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="shoe-heel" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
