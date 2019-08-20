import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';

function Header(props) {
    return (
        <View>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

            <SafeAreaView style={styles.AndroidSafeArea}>
                <View style={styles.container}>
                    <Image 
                        source={require('../../../assets/logo.jpg')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {props.children}    
                    </View>    
                </View>                            
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    logo: {
        width: 100,
        height: 36,
        resizeMode: 'contain'
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    right: {
        backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default Header;