import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StudentSection = () => {
    const [educationLevel, setEducationLevel] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [certifications, setCertifications] = useState('');
    const [languages, setLanguages] = useState('');

    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>Education Level</Text> */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={educationLevel}
                    onValueChange={(itemValue) => setEducationLevel(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#000000"
                >
                    <Picker.Item label="Select Education Level" value="" />
                    <Picker.Item label="Bachelors" value="bachelors" />
                    <Picker.Item label="Masters" value="masters" />
                    <Picker.Item label="Diploma" value="diploma" />
                    <Picker.Item label="Others" value="others" />
                </Picker>
            </View>

            {/* <Text style={styles.label}>Field of Study</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Field of Study"
                placeholderTextColor="#000000"
                value={fieldOfStudy}
                onChangeText={setFieldOfStudy}
            />

            {/* <Text style={styles.label}>Certifications</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Certifications"
                placeholderTextColor="#000000"
                value={certifications}
                onChangeText={setCertifications}
            />

            {/* <Text style={styles.label}>Languages</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Languages"
                placeholderTextColor="#000000"
                value={languages}
                onChangeText={setLanguages}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    },
    label: {
        fontSize: 14,
        color: '#ffffff',
        marginBottom: 5,
        marginLeft: 5,
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        // marginBottom: 20,
        height:40,
        justifyContent:'center',
        marginBottom: 25,
        marginTop: 18,
    },
    picker: {
        color: '#000000',
    },
    input: {
        color: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        fontSize: 14,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 25,
        backgroundColor:'#ffffff',
    }
});

export default StudentSection;