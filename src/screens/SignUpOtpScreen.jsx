import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpOtpScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <LinearGradient colors={['#57787B', '#27363E']} style={styles.main}>
            <ImageBackground
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f873/7185/6241fa22bb30fe971b8a772b127be54a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K535hPRgq3mwolWIWcC2HzLUJ-8MF-N~rw7H3So6342rXWO5sBGPsAY91U5fFPDquFswAlu9I5y7uZ9I9-j5Qg-MQJarunfjTTZr~55G9qk~36VFkz02N-7LBlhrUkaGEH7xMxwK~Qpm9gcqWYebCP0Y~KFMkWvl19rie0Q0OtrpR4I6WWiNcr9VBFdaegvIy8OpSmTHgNPbsJ3c4pfqWQGMqPWfFGffas97drcsQ36Ba47MUiTzusuS7H5TTlbLpjEs92vnkZ0ER0QjxjsIno3kgiWd0i2sDyx6V9DM2AsPs50jkha7CrjV5sOsEHmgZug2aQ1AknMNNkdCe33o7w__' }}
                style={styles.backgroundImage}
            >
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backButton}>{'<'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>OTP Verification</Text>
                    <Text style={styles.subtitle}>Enter the OTP Code sent to your phone 99999-00000</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                style={styles.otpInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                onKeyPress={(event) => handleKeyPress(event, index)}
                            />
                        ))}
                    </View>

                    <TouchableOpacity style={styles.verifyButton} onPress={() => 
                    navigation.navigate('VerificationSuccess')}>
                        <Text style={styles.verifyButtonText}>Verify</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert('Resend OTP')}>
                        <Text style={styles.resendText}>Didn't receive OTP? Resend</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topSection: {
        padding: 20,
    },
    backButton: {
        color: 'white',
        fontSize: 24,
    },
    container: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 20,
        paddingBottom: 50,
        paddingHorizontal: 35,
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#27363E',
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 30,
        color: '#27363E',
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 30,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#27363E',
        borderRadius: 8,
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        color: '#27363E',
        backgroundColor: 'white',
    },
    verifyButton: {
        backgroundColor: '#27363E',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginBottom: 20,
    },
    verifyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendText: {
        color: '#27363E',
        textDecorationLine: 'underline',
    },
});

export default SignUpOtpScreen;
