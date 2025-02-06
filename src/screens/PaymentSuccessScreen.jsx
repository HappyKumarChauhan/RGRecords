import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const PaymentSuccessScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='keyboard-arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment</Text>
                <Text></Text>
            </View>
               <View style={styles.horizontalLine}></View>
            <View style={styles.detailsContainer}>
                <Icon name="check-circle" size={100} color="white" />

                <Text style={styles.successTitle}>Payment Successful !!</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <TouchableOpacity style={styles.button}
                 onPress={() => navigation.navigate('PostEvent')}>
                    <Text style={styles.buttonText}>Event Details</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 1,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    horizontalLine: {
        height: 0.5,
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
    },
    successTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginVertical:20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        width:'100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PaymentSuccessScreen;