import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

const PaymentMethodScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#57787B', '#27363E']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment Method</Text>
                <Text></Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.section}>
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
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Icon name="credit-card" size={24} color="white" />
                            <Text style={styles.sectionTitle}>Credit/ Debit Cards</Text>
                        </View>
                        <Icon name="keyboard-arrow-down" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>VISA Bank **** 1234</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Text style={styles.optionText}>HDFC Bank **** 1234</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => navigation.navigate("AddCard")}
                        >
                            <Text style={styles.optionText}>+ Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
            onPress={()=>{navigation.navigate('PaymentSuccess')}}>
                <Text style={styles.payButtonText}>Pay now</Text>
                <Icon name="arrow-forward" size={20} color="black" />
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10

    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    content: {
        marginTop: 20,
        padding:10,
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal:10,
    },
    payButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 5
    },
});

export default PaymentMethodScreen;