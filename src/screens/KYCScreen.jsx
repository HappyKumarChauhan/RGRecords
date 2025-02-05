import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
// import styles from './KYCDetailsStyles';

const KYCDetails = ({ navigation }) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>KYC Details</Text>
                <Text></Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.imageContainer}>
                    <Icon name='account-circle' size={80} color='white' />
                </View>
                <Text style={styles.verifyText}>Let's Verify KYC</Text>
                <Text style={styles.subText}>Please submit the following documents to verify your profile.</Text>
                
                <TouchableOpacity style={styles.kycButton}>
                    <FAIcon name='id-card' size={34} color='white' />
                    <View>
                    <Text style={styles.kycButtonText}>Take a picture of your Valid ID</Text>
                    <Text style = {styles.innerText}>To check your personal informations are correct or not.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kycButton}>
                    <Icon name='photo-camera' size={34} color='white' />
                    <View>
                    <Text style={styles.kycButtonText}>Take a selfie of yourself</Text>
                    <Text style = {styles.innerText}>To match your face to your ID photo.</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                onPress={()=>{navigation.navigate('KycId')}}>
                    <Text style={styles.buttonText}>Next →</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default KYCDetails;

// KYCDetailsStyles.js
import { StyleSheet } from 'react-native';
import { FadeIn } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:''
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    detailsContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical:40,
    },
    imageContainer: {
        width: 170,
        height: 170,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor:'#D9D9D917',
    },
    verifyText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop:20
    },
    subText: {
        fontSize: 14,
        color: '#ddd',
        textAlign: 'center',
        marginBottom: 40,
    },
    kycButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#405A5C',
        paddingHorizontal:15,
        paddingVertical:30,
        borderRadius: 10,
        width: '100%',
        marginBottom: 15,
        borderColor:'#ffffff',
        borderWidth:1,
        justifyContent:'flex-start'
    },
    kycButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    innerText:{
        color: 'white',
        fontSize: 10,
        marginLeft: 10,
        marginVertical:8,

    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#27363E',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

// export default styles;
