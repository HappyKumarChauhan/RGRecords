import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const PrimaryHeader = ({ navigation, title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon name='keyboard-arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <Text></Text>
            </View>
            <View style={styles.horizontalLine}></View>
        </View>
    )
}

export default PrimaryHeader

const styles = StyleSheet.create({
    header: {
        paddingVertical:10,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        paddingVertical:5,
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
})