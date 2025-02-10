import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import PrimaryHeader from "../../components/utils/PrimaryHeader";

const PaymentMethodScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <PrimaryHeader title="Payment Method" navigation={navigation} />
            <ScrollView style={styles.content}>
                <LinearGradient colors={['#2A444B', '#2E5A5E']} style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Icon name="payments" size={24} color="white" />
                            <Text style={styles.sectionTitle}>UPI</Text>
                        </View>
                        <Icon name="keyboard-arrow-down" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>PhonePe</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>Google Pay</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>Paytm</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <LinearGradient colors={['#2A444B', '#2E5A5E']} style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Icon name="credit-card" size={24} color="white" />
                            <Text style={styles.sectionTitle}>Credit/ Debit Cards</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </View>
                        <Icon name="keyboard-arrow-down" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>VISA Bank **** 1234</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>HDFC Bank **** 1234</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => navigation.navigate("AddCard")}
                        >
                            <Text style={styles.optionText}>+ Add Card</Text>
                            <Icon name="keyboard-arrow-right" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <TouchableOpacity style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Icon name="account-balance" size={24} color="white" />
                            <Text style={styles.sectionTitle}>Net Banking</Text>
                        </View>
                        <Icon name="arrow-forward-ios" size={16} color="white" />
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={styles.payButton}
                onPress={() => { navigation.navigate('PaymentSuccess') }}>
                <Text></Text>
                <Text style={styles.payButtonText}>Pay now</Text>
                <Icon name="keyboard-arrow-right" size={30} color="black" />
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    content: {
        marginTop: 20,
        paddingHorizontal: 15,
    },
    section: {
        backgroundColor: "#305E62",
        borderRadius: 8,
        marginBottom: 15,
        padding: 10
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
    optionsContainer: {
        marginVertical: 8,
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 5,
    },
    optionText: {
        fontSize: 12,
        color: "white"
    },
    payButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    payButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 5
    },
});

export default PaymentMethodScreen;