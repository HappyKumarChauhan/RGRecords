import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PersonalInfoScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={30} color='white' />
                <Text style={styles.headerTitle}>Personal Details</Text>
                <Text></Text>
            </View>
            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis id velit incidunt vitae illo officia cum in beatae quaerat. At quis accusamus ea sapiente non distinctio nulla optio magni incidunt ipsam libero magnam voluptate veritatis debitis itaque velit rem aut asperiores, nesciunt sit doloremque placeat. Officia officiis odit error nobis repellat culpa eveniet commodi voluptatum molestiae rem ab ducimus, sapiente praesentium repellendus reiciendis sint iusto sunt numquam. Corrupti eius recusandae expedita, obcaecati fuga nemo velit. Illum eius consectetur, voluptatibus rerum inventore blanditiis voluptas perspiciatis molestiae sed hic voluptatum unde aliquam dolorem quisquam labore assumenda placeat possimus alias ducimus iure.</Text>
                <View style={styles.profileDetails}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#999" />
                    <TextInput style={styles.input} placeholder="Father's Name" placeholderTextColor="#999" />
                    <TextInput style={styles.input} placeholder="Mother's Name" placeholderTextColor="#999" />
                    <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#999" keyboardType='phone-pad' />
                </View>
                </View>
                <View style={styles.radioContainer}>
                    <TouchableOpacity><Text style={styles.radioText}>Male</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.radioText}>Female</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.radioText}>Other</Text></TouchableOpacity>
                </View>
                <TextInput style={styles.textArea} placeholder="Your Bio..." placeholderTextColor="#999" multiline />
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Next</Text>
                    <Icon name="arrow-forward" size={20} color="white" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E4F4F',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 12,
        color: 'white',
        textAlign: 'justify',
        marginVertical: 10,
    },
    profileDetails:{flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    profileImage: {
        width: 125,
        height: 150,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    inputContainer:{flex:1,
        paddingHorizontal:10,
    },
    input: {
        placeholderTextColor:'#ffffff',
        color:'#ffffff',
        borderBottomWidth:1,
        borderColor:'#ffffff',
        fontSize:10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    radioText: {
        color: 'white',
        fontSize: 14,
    },
    textArea: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        height: 80,
    },
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3741',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default PersonalInfoScreen