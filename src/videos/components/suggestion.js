import React from 'react';

import { 
    View,
    Text,
    Image,
    StyleSheet
 } from 'react-native';

function Suggestion(props) {
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    source={require('../../../assets/logo.jpg')}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreText}>Accion</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Avengers</Text>
                <Text style={styles.year}>2012</Text>
                <Text style={styles.rating}>5 estrellas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    left: {

    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    cover: {
        width: 100,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: '#fff',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    },  
    genre: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black'    
    },
    genreText: {
        color: '#fff',
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 7,
    }
})

export default Suggestion;