import React from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';

export default function App() {
  return (
    <Home>
      <Header />
      <Text>1 Hola mundo</Text>      
      <Text>2 Hola mundo</Text>     
      <Text>3 Hola mundo</Text>      
      <Text>4 Hola mundo</Text>      
      <Text>5 Hola mundo</Text>   
      <SuggestionList></SuggestionList>   
    </Home>
  );
}