import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const EditProfileScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='keyboard-arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Edit Personal Details</Text>
                <Text></Text>
            </View>
                <View style={styles.horizontalLine}></View>
            <View style={styles.detailsContainer}>
                <View style={styles.profileContainer}>
                    <Icon name='account-circle' size={75} color='white' />
                    <View>
                        <Text style={styles.profileName}>XYZ Name</Text>
                        <Text style={styles.profileID}>ID No: 3421113B</Text>
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name</Text>
                    <View style={styles.inputContainer}>
                        <Icon name='person' size={24} color='white' />
                        <TextInput style={styles.input} placeholder='XYZ Name' placeholderTextColor='#ffffff' />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.inputContainer}>
                        <Icon name='email' size={24} color='white' />
                        <TextInput style={styles.input} placeholder='XYZName@gmail.com' placeholderTextColor='#ffffff' />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone Number</Text>
                    <View style={styles.inputContainer}>
                        <Icon name='call' size={24} color='white' />
                        <TextInput style={styles.input} placeholder='0000-0000' placeholderTextColor='#ffffff' />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Address</Text>
                    <View style={styles.inputContainer}>
                        <Icon name='location-on' size={24} color='white' />
                        <TextInput style={styles.input} placeholder='XYZ Address' placeholderTextColor='#ffffff' />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
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
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        gap: 10
    },
    profileName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    profileID: {
        fontSize: 14,
        color: 'white',
    },
    formGroup: {
        gap: 5,
        marginVertical: 5,
    },
    label: {
        color: '#ffffff',
        fontWeight: 700,
    },
    inputContainer: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 8,
        marginVertical:6,
    },
    input: {
        paddingHorizontal: 8,
        flex: 1,
        color: '#fff',
    },
    button: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal:10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default EditProfileScreen;