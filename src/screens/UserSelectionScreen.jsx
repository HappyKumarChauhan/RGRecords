import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const UserSelectionScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#57787B', '#27363E']} style={styles.main}>
            <View style={styles.topSection}>
                <Text style={styles.topSectionText}>RG</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>User Type</Text>
                    <View style={styles.horizontalLine}></View>
                </View>
                <View style={styles.selectionContainer}>
                    <Text style={styles.primaryText}>Select User Type &rarr;</Text>
                    <Text style={styles.secondaryText}>To Continue, please select your user type</Text>
                    <View style={styles.boxContainer}>
                        <View style={styles.box}>
                            <Icon name="person" size={40} color="white" />
                            <Text style={styles.textWhite}>User</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon name="handshake" size={40} color="white" />
                            <Text style={styles.textWhite}>Dealer</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.nextButton} onPress={()=>{navigation.navigate('LogIn')}}>
                        <Text style={styles.buttonText}>Next &rarr;</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default UserSelectionScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
    },
    topSection: {

    },
    topSectionText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 700
    },
    container: {
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
        marginVertical: 20,
        fontWeight: 700
    },
    horizontalLine: {
        height: 0.5,
        backgroundColor: 'white',
        width: "100%"
    },
    selectionContainer: {
        marginVertical: 20,
        paddingVertical: 30,
        gap: 15
    },
    primaryText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 700
    },
    secondaryText: {
        color: 'white',
        fontSize: 12
    },
    boxContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center'
    },
    box: {
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        height: 150
    },
    nextButton:{ 
        backgroundColor: 'black', 
        paddingVertical: 8, 
        alignItems: 'center', 
        borderRadius: 10 
    },
    buttonText:{
        color:'white',
        fontWeight:700
    },
    textWhite:{
        color:'white'
    }

})