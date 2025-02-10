import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import PrimaryHeader from '../../components/utils/PrimaryHeader';
const PersonalInfoScreen = ({ navigation }) => {
    const [selectedGender, setSelectedGender] = useState(undefined)
    const genders = [
        { id: '1', label: 'Male', value: 'male', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '2', label: 'Female', value: 'female', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '3', label: 'Other', value: 'other', color: '#ffffff', labelStyle: { color: '#ffffff' } },
    ];
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <PrimaryHeader navigation={navigation} title="Personal Details" />

            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis id velit incidunt vitae illo officia cum in beatae quaerat. At quis accusamus ea sapiente non distinctio nulla optio magni incidunt ipsam libero magnam voluptate veritatis debitis itaque velit rem aut asperiores, nesciunt sit doloremque placeat. Officia officiis odit error nobis repellat culpa eveniet commodi voluptatum molestiae rem ab ducimus, sapiente praesentium repellendus reiciendis sint iusto sunt numquam. Corrupti eius recusandae expedita, obcaecati fuga nemo velit. Illum eius consectetur, voluptatibus rerum inventore blanditiis voluptas perspiciatis molestiae sed hic voluptatum unde aliquam dolorem quisquam labore assumenda placeat possimus alias ducimus iure.</Text>
                <View style={styles.profileDetails}>
                    <View style={styles.profileImageContainer}>
                        <Icon name='account-circle' size={50} color='white' />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#ffffff" />
                        <TextInput style={styles.input} placeholder="Father's Name" placeholderTextColor="#ffffff" />
                        <TextInput style={styles.input} placeholder="Mother's Name" placeholderTextColor="#ffffff" />
                        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#ffffff" keyboardType='phone-pad' />
                    </View>
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <RadioGroup
                        radioButtons={genders}
                        onPress={setSelectedGender}
                        selectedId={selectedGender}
                        layout='row'
                        containerStyle={{ justifyContent: 'space-between' }}
                    />
                </View>
                <TextInput style={styles.textArea} placeholder="Your Bio..." placeholderTextColor="#fff" multiline />

            </ScrollView>
            <TouchableOpacity style={styles.applyButton}
                onPress={() => { navigation.navigate('AddressDetails') }}>
                <Text></Text>
                <Text style={styles.applyButtonText}>Next</Text>
                <Icon name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 12,
        color: 'white',
        textAlign: 'justify',
        marginVertical: 10,
    },
    profileDetails: {
        paddingVertical: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 125,
        height: 150,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        color: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        fontSize: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    textArea: {
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        minHeight: 100,
    },
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 10
    },
    applyButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default PersonalInfoScreen