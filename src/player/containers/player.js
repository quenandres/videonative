import React, { Component } from 'react';
import { 
    StyleSheet
 } from 'react-native';

import { Video } from 'expo-av';
import Layout from '../components/layout'

class Player extends Component {
    render(){
        return(
            <Layout
                video={
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}              
                        style={styles.video}
                        resizeMode="contain"
                    />
                }
            />
        )
    }   
}

const styles = StyleSheet.create({
    video: {
        backgroundColor: 'yellow',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;