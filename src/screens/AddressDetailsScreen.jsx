import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, PermissionsAndroid, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const AddressDetailsScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    
    const requestLocationPermission = async () => {
        const permission =
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    
        const result = await check(permission); // Check if permission is already granted
    
        if (result === RESULTS.GRANTED) {
            console.log('Permission already granted');
            return true;
        } else if (result === RESULTS.DENIED) {
            const requestResult = await request(permission); // Automatically requests permission
            return requestResult === RESULTS.GRANTED;
        } else {
            Alert.alert('Permission Denied', 'Location access is required to fetch your current location.');
            return false;
        }
    };
    const getCurrentLocation = async () => {
        const granted = await requestLocationPermission();
        if (granted) {
            Geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error(error);
                    Alert.alert('Error', 'Could not fetch location.');
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    };
    
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon name='keyboard-arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Address Details</Text>
                <Text></Text>
            </View>
             <View style={styles.horizontalLine}></View>
            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor blanditiis harum distinctio sit impedit deleniti accusamus reiciendis quo cumque doloremque esse dolorum veniam ullam at, cupiditate in eaque incidunt iure, sapiente labore quia exercitationem sint. Asperiores voluptatibus, fugit porro quod obcaecati, amet dolorem iure repellendus eos optio mollitia.</Text>
                <TextInput style={styles.input} placeholder="Address Line 1" placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Address Line 2" placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Select Country" placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Select State" placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Select City" placeholderTextColor="#ffffff" />
                <TextInput style={styles.input} placeholder="Pincode" placeholderTextColor="#ffffff" keyboardType='number-pad' />

                <TouchableOpacity style={styles.locationSelector}
                onPress={()=>{getCurrentLocation()}}
                >
                    <Text style={styles.locationText}>Select current location</Text>
                    <Icon name='arrow-drop-down' size={20} color='white' />
                </TouchableOpacity>
                {location ? (
                    <Text style={styles.locationText}>
                        Latitude: {location.latitude}{"\n"}
                        Longitude: {location.longitude}
                    </Text>
                ) : (
                    <Text style={styles.locationText}>Fetching location...</Text>
                )}
                <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.mapImage} />
            </ScrollView>
            <TouchableOpacity style={styles.applyButton}
                onPress={() => { navigation.navigate('Qualification') }}
            >
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
    horizontalLine: {
        height: 0.5,
        backgroundColor: '#ffffff',
        marginTop: 10,
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
    input: {
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    locationSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E4C57',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    locationText: {
        color: 'white',
        fontSize: 14,
    },
    mapImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginVertical: 10,
    },
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    applyButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default AddressDetailsScreen;
