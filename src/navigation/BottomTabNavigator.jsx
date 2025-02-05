import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardScreen from '../screens/DashboardScreen'
import ProfileScreen from '../screens/ProfileScreen';

const HomeScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Home Screen</Text>
    </View>
);

const TasksScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Tasks Screen</Text>
    </View>
);

const NotificationsScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Notifications Screen</Text>
    </View>
);


const Tab = createBottomTabNavigator();

const App = ({ navigation }) => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Dashboard') {
                            iconName = 'home';
                        } else if (route.name === 'Tasks') {
                            iconName = 'check-box';
                        } else if (route.name === 'Notifications') {
                            iconName = 'notifications';
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#27363E',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: 'white',
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 5,
                    },
                    headerShown: false,
                    tabBarShowLabel:false
                })}
            >
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Tasks" component={TasksScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;