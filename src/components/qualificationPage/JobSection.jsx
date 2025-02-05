import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const JobSection = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [selectedWorkMode, setSelectedWorkMode] = useState(undefined);

    const workMode = [
        { id: '1', label: 'On-site', value: 'on-site', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '2', label: 'Remote', value: 'remote', color: '#ffffff', labelStyle: { color: '#ffffff' } },
        { id: '3', label: 'Hybrid', value: 'hybrid', color: '#ffffff', labelStyle: { color: '#ffffff' } },
    ];

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Job Title" placeholderTextColor="#000000" value={jobTitle} onChangeText={setJobTitle} />
            <TextInput style={styles.input} placeholder="Salary per annum" placeholderTextColor="#000000" value={salary} onChangeText={setSalary} keyboardType='numeric' />
            <View style={styles.radio}>
                <RadioGroup 
                radioButtons={workMode} 
                onPress={setSelectedWorkMode} 
                selectedId={selectedWorkMode} 
                layout='row' 
                containerStyle={{ justifyContent: 'space-between' }} 
                />
            </View>
            <TextInput style={styles.input} placeholder="Location" placeholderTextColor="#000000" value={location} onChangeText={setLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    },
    input: {
        color: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        fontSize: 14,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        marginTop: 18,
    },
    radio: {
        marginTop: 18
    }
});

export default JobSection;