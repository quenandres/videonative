import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player'

export default class App extends Component {

  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();

    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header />
          <View
            style={{
              flex: 1,
              height: 100
            }}
          >
            <Player />
          </View>
        
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList 
          list={this.state.categoryList} 
        />
        <SuggestionList 
          list={this.state.suggestionList} 
        />        
      </Home>
    );
  }
}