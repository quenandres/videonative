import React from 'react';
import { 
    Text,
    StyleSheet,
    ImageBackground,
    Platform
 } from 'react-native';
import { _confirmProps } from 'react-native/Libraries/Modal/Modal';

 function Category(props) {
    return(
        <ImageBackground
            style={styles.wrapper}
            source={{
                uri: props.background_image
            }}
        >
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
 }

 const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genre: {
        color: 'white',
        fontSize: 40,
        justifyContent: 'center',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0,.75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        ...Platform.select({
            ios: {
              textShadowRadius: 0,
            },
            android: {
              textShadowRadius: 1,
            },
        })
    }
 })

 export default Category;