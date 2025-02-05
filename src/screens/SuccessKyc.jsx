import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SuccessKycScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#57787B', '#27363E']} style={styles.main}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon name="check-circle" size={60} color="#27363E" />
                </View>
                <Text style={styles.title}>Approved</Text>
                <Text style={styles.subtitle}>You have successfully verified your account</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 30,
        alignItems: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    iconContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#27363E',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#27363E',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#27363E',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 60,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SuccessKycScreen;