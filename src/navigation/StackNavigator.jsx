import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserSelectionScreen from '../screens/auth/UserSelectionScreen';
import LogInScreen from '../screens/auth/LogInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignUpOtpScreen from '../screens/auth/SignUpOtpScreen';
import VerificationSuccessScreen from '../screens/auth/VerificationSuccessScreen';
import BottomTabNavigator from './BottomTabNavigator'
import EventDetailsScreen from '../screens/event/EventDetailsScreen';
import TermsScreen from '../screens/event/TermsScreen';
import PersonalInfoScreen from '../screens/event/PersonalInfoScreen';
import AddressDetailsScreen from '../screens/event/AddressDetailsScreen';
import PaymentMethodScreen from '../screens/payment/PaymentMethodScreen';
import AddCardScreen from '../screens/payment/AddCardScreen';
import QualificationScreen from '../screens/event/QualificationScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import PaymentSuccessScreen from '../screens/payment/PaymentSuccessScreen';
import AccountInformation from '../screens/auth/AccountInfoScreen';
import BusinessDetails from '../screens/auth/BusinessScreen';
import KYCDetails from '../screens/auth/KYCScreen';
import KYCDetailsScreen from '../screens/auth/KycIdScreen';
import SuccessKycScreen from '../screens/auth/SuccessKyc';
import PostEventDetailsScreen from '../screens/event/PostEventScreen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';


const Stack = createStackNavigator()

const StackNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SelectUser" component={UserSelectionScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpOtp" component={SignUpOtpScreen} />
        <Stack.Screen name="VerificationSuccess" component={VerificationSuccessScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} />
        <Stack.Screen name="Qualification" component={QualificationScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Account" component={AccountInformation} />
        <Stack.Screen name="Business" component={BusinessDetails} />
        <Stack.Screen name="KYC" component={KYCDetails} />
        <Stack.Screen name="KycId" component={KYCDetailsScreen} />
        <Stack.Screen name="Success" component={SuccessKycScreen} />
        <Stack.Screen name="PostEvent" component={PostEventDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
