import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const KYCDetailsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <LinearGradient colors={['#57787B', '#27363E']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' size={30} color='white' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KYC Details</Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Icon name='person' size={80} color='white' />
        </View>
        <Text style={styles.verifyText}>Upload proof of your identity</Text>
        <Text style={styles.subText}>Please submit the following documents below.</Text>
        
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='credit-card' size={24} color='white' />
          <Text style={styles.kycButtonText}>ID Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='flight' size={24} color='white' />
          <Text style={styles.kycButtonText}>Passport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.kycButton}>
          <Icon name='directions-car' size={24} color='white' />
          <Text style={styles.kycButtonText}>Driving License</Text>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
    marginLeft: 10,
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
