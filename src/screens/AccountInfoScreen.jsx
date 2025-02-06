import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const AccountInformation = ({ navigation }) => {
    const [selectedGender, setSelectedGender] = useState(undefined)
    const genders = [
        { id: '1', label: 'Male', value: 'male', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '2', label: 'Female', value: 'female', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '3', label: 'Other', value: 'other', color: '#ffffff', labelStyle: { color: '#ffffff' } },
    ];

    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='keyboard-arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Personal Details</Text>
                <Text></Text>
            </View>
             <View style={styles.horizontalLine}></View>
            <ScrollView style={styles.detailsContainer}>
                <View style={styles.profileContainer}>
                    <Icon name='account-circle' size={60} color='white' />
                    <TouchableOpacity style={styles.cameraIcon}>
                        <Icon name='photo-camera' size={24} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Gender</Text>
                    <RadioGroup
                        radioButtons={genders}
                        onPress={setSelectedGender}
                        selectedId={selectedGender}
                        layout='row'
                        containerStyle={{ justifyContent: 'space-between' }}
                    />

                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={[styles.input]} multiline />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('Business') }}>
                <Text style={styles.buttonText}>Next</Text>
                <Icon name='arrow-forward' size={20} color='black' />
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
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    horizontalLine: {
        height: 0.2,
        backgroundColor: '#ffffff',
        marginTop: 5,
    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    profileContainer: {
        backgroundColor:'#3061657A',
        boxSizing:'border-box',
        padding:12,
        borderRadius:'50%',
        marginHorizontal:'auto',
        alignItems: 'center',
        marginBottom: 20,
    },
    cameraIcon: {
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        zIndex:10,
        bottom: -5,
        right: 5,
        padding: 5,
        borderRadius: 20,
    },
    formGroup: {
        marginVertical: 5,
        gap: 5,
    },
    label: {
        color: 'white',
        fontSize: 14,
    },
    input: {
        flexDirection: "row",
        paddingVertical: 12,
        backgroundColor: '#D9D9D91A',
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginHorizontal:10,
        marginBottom: 30,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default AccountInformation;
