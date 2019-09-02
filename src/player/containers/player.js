import React, { Component } from 'react';
import { Video } from 'expo-av';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Layout from '../components/layout';

class Player extends Component {  
  state = {
    loading: true,
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: false
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }
  
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video = {
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            onBuffer={this.onBuffer}
            isLoaded={this.onLoad}
            style={styles.video}
          />
        }
        loader={
          <ActivityIndicator color="red"/>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player