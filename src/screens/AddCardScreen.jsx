import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

const AddCardScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add Card</Text>
                <Text></Text>
            </View>
             <View style={styles.horizontalLine}></View>
             <ScrollView style= {{flex:1}}>

            <View style={styles.section}>
                <TouchableOpacity style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Credit/ Debit Cards</Text>
                    <Icon name="arrow-drop-down" size={24} color="white" />
                </TouchableOpacity>

                <TextInput placeholder="Cardholder Name" placeholderTextColor="white" style={styles.input} />
                <TextInput placeholder="Card Number" placeholderTextColor="white" style={styles.input} keyboardType="numeric" />
                
                <View style={styles.row}>
                    <TextInput placeholder="Expiry Date" placeholderTextColor="white" style={[styles.input, styles.smallInput]} keyboardType="numeric" />
                    <TextInput placeholder="CVV" placeholderTextColor="white" style={[styles.input, styles.smallInput]} keyboardType="numeric" secureTextEntry />
                </View>

                <TouchableOpacity style={styles.checkBoxContainer}>
                    <Icon name="check-box-outline-blank" size={20} color="white" />
                    <Text style={styles.checkBoxText}>Save this card for faster payments.</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Pay now</Text>
                <Icon name="arrow-forward" size={20} color="black" />
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
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        // paddingVertical: 10 
    },
    headerTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "white"
     },
     horizontalLine: {
        height: 0.5,
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    section: { 
        backgroundColor: "#3A4E52", 
        borderRadius: 8, 
        padding: 15, 
        marginTop: 20,
        marginHorizontal:10, 
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
    input: { 
        borderBottomWidth: 1, 
        borderBottomColor: "#ffffff", 
        paddingVertical: 10, 
        color: "white", 
        marginTop: 15 
    },
    row: { 
        flexDirection: "row", 
        justifyContent: "space-between" 
    },
    smallInput: { 
        width: "48%" 
    },
    checkBoxContainer: { 
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 30,
    },
    checkBoxText: { 
        color: "white", 
        fontSize: 14, 
        marginLeft: 5 
    },
    payButton: { 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#ffffff", 
        padding: 10, 
        borderRadius: 10, 
        marginBottom: 20, 
        marginTop: 20 ,
        marginHorizontal:10
    },
    payButtonText: { 
        color: "black", 
        fontWeight: "bold", 
        fontSize: 16, 
        marginRight: 5 
    },
});

export default AddCardScreen;
