import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

const BusinessDetails = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Business Details</Text>
                <Text></Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <ScrollView style={styles.detailsContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Business Description</Text>
                    <TextInput style={styles.input} multiline />
                </View>
                
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Service Catagories</Text>
                    <TextInput style={styles.input} multiline />
                </View>

                <Text style={styles.sectionTitle}>Portfolio/Showcase:</Text>
                <View style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.linkText}>Photos/Videos</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.linkText}>Client Testimonials</Text>
                </View>

                <Text style={styles.sectionTitle}>Business Features:</Text>

                <View style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.linkText}>Certifications</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.linkText}>Awards/Achievements</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.linkText}>Discounts/Offers</Text>
                </View>
                <View style={styles.formGroup}>
                <Text style={styles.label}>Business Registration Number</Text>
                <TextInput style={styles.input} />
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('KYC') }}>
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
    formGroup: {
        marginVertical: 5,
        gap: 5
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 8,

    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    input: {
        backgroundColor: '#D9D9D91A',
        minHeight:90,
        color: 'white',
        padding: 10,
        marginBottom: 1,
        borderRadius: 8,
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        // marginTop: 15,
        marginVertical: 8,
    },
    listItem: {
        flexDirection: 'row',
        gap: 5,
        marginVertical: 5,
    },
    bulletPoint: {
        color: '#ffffff'
    },
    linkText: {
        fontSize: 14,
        color: '#ffffff',
        textDecorationLine: 'underline',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom:30,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default BusinessDetails;
