import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const KYCDetailsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='keyboard-arrow-left' size={30} color='white' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KYC Details</Text>
      </View>
        <View style={styles.horizontalLine}></View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Icon name='badge' size={80} color='white' />
        </View>
        <Text style={styles.verifyText}>Upload proof of your identity</Text>
        <Text style={styles.subText}>Please submit the following documents below.</Text>
        
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='credit-card' size={24} color='white' />
          <Text style={styles.kycButtonText}>ID Card</Text>
          <Icon name='keyboard-arrow-right' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='flight' size={24} color='white' />
          <Text style={styles.kycButtonText}>Passport</Text>
          <Icon name='keyboard-arrow-right' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='directions-car' size={24} color='white' />
          <Text style={styles.kycButtonText}>Driving License</Text>
          <Icon name='keyboard-arrow-right' size={24} color='white' />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}
         onPress={()=>{navigation.navigate('Success')}}>
          <Text style={styles.buttonText}>Submit →</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    padding:10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:1,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginTop: 1,
},
  detailsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    borderWidth: 0.5,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  verifyText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
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
    justifyContent: 'space-between',
    backgroundColor: '#405A5C',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  kycButtonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#27363E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default KYCDetailsScreen;
