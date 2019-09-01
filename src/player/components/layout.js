import React from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

 function Layout(props) {
    return (
        <View style={styles.container}>
            <View style={styles.video}>
                {props.video}                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%',
    },
    video: {
        position: 'absolute',
        left: 58,
        top: 100,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
    }
})

export default Layout;