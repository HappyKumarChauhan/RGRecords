import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserSelectionScreen from '../screens/UserSelectionScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpOtpScreen from '../screens/SignUpOtpScreen';
import VerificationSuccessScreen from '../screens/VerificationSuccessScreen';
import BottomTabNavigator from './BottomTabNavigator'
import EventDetailsScreen from '../screens/EventDetailsScreen';
import TermsScreen from '../screens/TermsScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import AddressDetailsScreen from '../screens/AddressDetailsScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import AddCardScreen from '../screens/AddCardScreen';
import QualificationScreen from '../screens/QualificationScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen';
import AccountInformation from '../screens/AccountInfoScreen';
import BusinessDetails from '../screens/BusinessScreen';
import KYCDetails from '../screens/KYCScreen';
import KYCDetailsScreen from '../screens/KycIdScreen';
import SuccessKycScreen from '../screens/SuccessKyc';
import PostEventDetailsScreen from '../screens/PostEventScreen';


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
