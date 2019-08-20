import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground
 } from 'react-native';


 function CategoryListLayout(props) {
    return(
        <ImageBackground 
            source={require('../../../assets/background.png')}
            style={styles.cointainer}
        >
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </ImageBackground>        
    )
 }

const styles = StyleSheet.create({
    cointainer: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

 export default CategoryListLayout;