import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryHeader from '../../components/utils/PrimaryHeader';

const TermsScreen = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <PrimaryHeader navigation={navigation} title="Terms & Conditions" />
            <View style={styles.detailsContainer}>
                <ScrollView style={styles.contentContainer}>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non, labore laboriosam reprehenderit magni molestiae ex dolor natus vel, eius magnam corporis beatae alias fuga sapiente praesentium voluptates blanditiis voluptatem eveniet dolorum tenetur quos nobis nihil accusamus? Dignissimos, culpa? Dolores magni, laudantium laboriosam dolorem voluptatum impedit esse incidunt a cumque ducimus earum. Quas!</Text>
                    <Text style={styles.subTitle}>Why do we use?</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ea vitae itaque assumenda numquam facere dolor nihil id quisquam molestiae quibusdam, similique reprehenderit quae accusantium eaque mollitia sequi, illum tempore labore? Quam, voluptatibus beatae odit error numquam ratione aperiam corporis vitae ea harum culpa quaerat tempore reiciendis corrupti dolorem quis eos! Aliquam ex aperiam eos dolorum voluptates, laboriosam eius impedit maiores deleniti eum quibusdam, sunt rem, commodi accusamus fuga! Nulla illo laboriosam voluptatem ullam incidunt. Praesentium officiis facere facilis libero commodi rem sed voluptatem tempora ducimus, natus numquam nam quidem assumenda maiores harum non? Inventore aperiam, voluptatum quae reiciendis excepturi sapiente dolores quos quam debitis. Sed tempora ipsam enim distinctio fugiat iure minima maiores unde sint harum inventore adipisci, rem suscipit numquam vitae ratione ad reiciendis accusamus doloribus! Praesentium suscipit ad id harum, tempore hic. Labore, praesentium omnis deserunt aut quae voluptatum!
                    </Text>
                </ScrollView>
                <TouchableOpacity
                    style={styles.checkBoxButton}
                    onPress={() => setIsChecked(!isChecked)}
                >
                    <Icon name={isChecked ? 'check-box' : 'check-box-outline-blank'} size={24} color="#ffffff" />
                    <Text style={styles.checkBoxText}>Accept Terms & Conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={!isChecked}
                    style={styles.applyButton}
                    onPress={() => { navigation.navigate('PersonalInfo') }}
                >
                    <Text></Text>
                    <Text style={styles.applyButtonText}>Next</Text>
                    <Icon name="keyboard-arrow-right" size={30} color="black" />
                </TouchableOpacity>
            </View>
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
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    description: {
        fontSize: 12,
        color: 'white',
        textAlign: 'justify',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    checkBoxButton: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 5,
    },
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
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

export default TermsScreen