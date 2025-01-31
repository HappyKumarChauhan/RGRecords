import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashboardScreen = () => {
    const data = [
        { id: 1, date: '14 Jan 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, date: '14 Jan 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, date: '14 Jan 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, date: '14 Jan 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, date: '14 Jan 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='menu' size={30} color='white' />
                <Text style={styles.headerTitle}>Dashboard</Text>
                <Icon name='account-circle' size={30} color='white' />
            </View>
            <ScrollView style={styles.cardsContainer}>
                {data.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.cardBody}>
                            <Text style={styles.date}>Date: {item.date}</Text>
                            <Text style={styles.description} ellipsizeMode="tail">
                                {item.description}
                            </Text>
                            <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
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
        paddingVertical: 3,
        alignItems: 'center', // Align items vertically centered
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    cardsContainer: {
        marginTop: 20,
        paddingHorizontal:10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical:5,
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginRight: 10,
    },
    cardBody: {
        flex: 1, // Take up remaining space
        padding:4,
        alignItems:'flex-end',
    },
    date: {
        fontSize: 12,
        fontWeight: '400',
        color: '#606060',
    },
    description: {
        paddingVertical:2,
        fontSize: 12,
        color: '#2C3741',
        textAlign: 'justify',
    },
    applyButton: {
        backgroundColor: '#2C3741',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 5,
    },
    applyButtonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default DashboardScreen;