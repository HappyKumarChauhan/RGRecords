import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const LogInScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.main}>
            <ImageBackground
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f873/7185/6241fa22bb30fe971b8a772b127be54a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K535hPRgq3mwolWIWcC2HzLUJ-8MF-N~rw7H3So6342rXWO5sBGPsAY91U5fFPDquFswAlu9I5y7uZ9I9-j5Qg-MQJarunfjTTZr~55G9qk~36VFkz02N-7LBlhrUkaGEH7xMxwK~Qpm9gcqWYebCP0Y~KFMkWvl19rie0Q0OtrpR4I6WWiNcr9VBFdaegvIy8OpSmTHgNPbsJ3c4pfqWQGMqPWfFGffas97drcsQ36Ba47MUiTzusuS7H5TTlbLpjEs92vnkZ0ER0QjxjsIno3kgiWd0i2sDyx6V9DM2AsPs50jkha7CrjV5sOsEHmgZug2aQ1AknMNNkdCe33o7w__' }}
                // resizeMode='repeat'
                style={styles.backgroundImage}
            >
                <View style={styles.topSection}>
                    <Text style={styles.topSectionText}>RG</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>LogIn</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="mail" size={30} color="black" />
                        <TextInput placeholderTextColor="#606060" placeholder="Email" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={30} color="black" />
                        <TextInput placeholderTextColor="#606060" placeholder="Password" />
                    </View>
                    <View style={styles.checkBoxAndForgotContainer}>
                        <TouchableOpacity
                            style={styles.checkBoxButton}
                            onPress={() => setIsChecked(!isChecked)}
                        >
                            <Icon name={isChecked ? 'check-box' : 'check-box-outline-blank'} size={24} color="#00343C" />
                            <Text style={{ marginLeft: 8 }}>Remember Me</Text>
                        </TouchableOpacity>
                        {/* Forgot Password Button */}
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ForgotPassword') }}
                            style={styles.forgotPasswordContainer}
                        >
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}                    >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity >

                    <View style={{marginVertical:15}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View style={{width:'30%',height:1,backgroundColor:'gray'}}></View>
                            <Text>Log in with</Text>
                            <View style={{width:'30%',height:1,backgroundColor:'gray'}}></View>
                        </View>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'center',gap:'10',}}>
                            <View style={{width:45,height:45,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:8,backgroundColor:'white'}}>
                            <FAIcon name="google" size={30}/>
                            </View>
                            <View style={{width:45,height:45,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:8,backgroundColor:'white'}}>
                            <FAIcon name="facebook" size={30}/>
                            </View>
                            <View style={{width:45,height:45,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:8,backgroundColor:'white'}}>
                            <FAIcon name="apple" size={30}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}><Text style={styles.signUpButtonText}>Sign Up</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#27363E'
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
        fontWeight: 700
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
        fontWeight: 700,
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
    signUpContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 4,
    },
    signUpText: {
        fontSize: 14,
        fontWeight: 600,
        color: '#606060',
    },
    signUpButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue'
    },
    checkBoxAndForgotContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:8
    },
    checkBoxButton:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    forgotPasswordText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#00343C',
        textDecorationLine:'underline'
    },
})

export default LogInScreen;