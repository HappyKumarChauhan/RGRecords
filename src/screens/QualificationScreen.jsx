import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import LinearGradient from 'react-native-linear-gradient';
import StudentSection from '../components/qualificationPage/StudentSection';
import JobSection from '../components/qualificationPage/JobSection';

const QualificationScreen = ({ navigation }) => {
    const [selectedEmployment, setSelectedEmployment] = useState(undefined);

    const employmentStatus = [
        { id: '1', label: 'Student', value: 'student', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '2', label: 'Job', value: 'job', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '3', label: 'Non-working', value: 'non-working', color: '#ffffff', labelStyle: { color: '#ffffff' } },
    ];

    return (
        <LinearGradient colors={['rgba(48, 97, 101, 1)', 'rgba(39, 54, 62, 1)']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='keyboard-arrow-left' size={30} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Qualification</Text>
                    <Text></Text>
                </View>
                <View style={styles.horizontalLine}></View>

                <ScrollView style={styles.detailsContainer}>
                    <View>
                        <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni veniam, a accusantium placeat nulla nobis molestias beatae tempora doloremque assumenda consequatur delectus commodi reprehenderit aperiam eum voluptas omnis! Totam sapiente, sequi aliquid eos repellat sit sint! Earum, sit voluptatibus voluptatem commodi cupiditate voluptate debitis, ipsa unde totam nemo incidunt omnis.</Text>
                    </View>
                    <Text style={styles.description}>Select your employment status:</Text>
                    <RadioGroup
                        radioButtons={employmentStatus}
                        onPress={setSelectedEmployment}
                        selectedId={selectedEmployment}
                        layout='row'
                        containerStyle={{ justifyContent: 'space-between' }}
                    />

                    {selectedEmployment == 1 && <StudentSection />}
                    {selectedEmployment == 2 && <JobSection />}
                </ScrollView>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableOpacity style={styles.applyButton}
                        onPress={() => { navigation.navigate('PaymentMethod') }}>
                        <Text></Text>
                        <Text style={styles.applyButtonText}>Next</Text>
                        <Icon name="keyboard-arrow-right" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2E4F4F',
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
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 8,
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

export default QualificationScreen;