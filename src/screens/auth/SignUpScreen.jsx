import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.main}>
            <ImageBackground
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f873/7185/6241fa22bb30fe971b8a772b127be54a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K535hPRgq3mwolWIWcC2HzLUJ-8MF-N~rw7H3So6342rXWO5sBGPsAY91U5fFPDquFswAlu9I5y7uZ9I9-j5Qg-MQJarunfjTTZr~55G9qk~36VFkz02N-7LBlhrUkaGEH7xMxwK~Qpm9gcqWYebCP0Y~KFMkWvl19rie0Q0OtrpR4I6WWiNcr9VBFdaegvIy8OpSmTHgNPbsJ3c4pfqWQGMqPWfFGffas97drcsQ36Ba47MUiTzusuS7H5TTlbLpjEs92vnkZ0ER0QjxjsIno3kgiWd0i2sDyx6V9DM2AsPs50jkha7CrjV5sOsEHmgZug2aQ1AknMNNkdCe33o7w__' }}
                style={styles.backgroundImage}
            >
                <View style={styles.topSection}>
                    <Text style={styles.topSectionText}>RG</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="person" size={30} color="black" />
                        <TextInput style={styles.input} placeholderTextColor="#606060" placeholder="Full Name" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="phone" size={30} color="black" />
                        <TextInput style={styles.input} placeholderTextColor="#606060" placeholder="Phone Number" keyboardType="phone-pad" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="mail" size={30} color="black" />
                        <TextInput style={styles.input} placeholderTextColor="#606060" placeholder="Email" keyboardType="email-address" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={30} color="black" />
                        <TextInput style={styles.input} placeholderTextColor="#606060" placeholder="Password" secureTextEntry={!passwordVisible} />
                    </View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Account') }}
                        style={styles.button}>
                        <Text style={styles.buttonText} >Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpOptions}>
                        <View style={styles.signUpOptionsHeader}>
                            <View style={styles.line}></View>
                            <Text>Sign up with</Text>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.signUpOptionsIconContainer}>
                            <View style={styles.signUpOptionIcon}>
                                <FAIcon name="google" size={30} />
                            </View>
                            <View style={styles.signUpOptionIcon}>
                                <FAIcon name="facebook" size={30} />
                            </View>
                            <View style={styles.signUpOptionIcon}>
                                <FAIcon name="apple" size={30} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={styles.signInText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('LogIn') }}>
                            <Text style={styles.signInButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'space-between'
    },
    topSection: {
        padding: 20
    },
    topSectionText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
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
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        paddingVertical: 5,
        color: 'black'
    },
    inputContainer: {
        backgroundColor: 'white',
        width: 310,
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#00343C',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        width: 310,
        backgroundColor: '#0C1922',
        height: 48,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 4,
    },
    signInText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#606060',
    },
    signInButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue'
    },
    signUpOptions: {
        marginVertical: 15
    },
    signUpOptionsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    line: {
        width: '30%',
        height: 1,
        backgroundColor: 'gray'
    },
    signUpOptionsIconContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '10',
    },
    signUpOptionIcon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor: 'white'
    }
});

export default SignUpScreen;
