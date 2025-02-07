import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

const notifications = [
  { id: "1", category: "Your Activity", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "2", category: "Your Activity", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "3", category: "Your Activity", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "4", category: "Previous", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "5", category: "Previous", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const NotificationScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#27363E", "#306165"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Text></Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <ScrollView style={styles.scrollContainer}>
        {Array.from(new Set(notifications.map((item) => item.category))).map((category) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {notifications.filter((item) => item.category === category).map((item) => (
              <View key={item.id}>
                <View style={styles.notificationItem}>
                  {/* Circular border around the icon */}
                  <View style={styles.iconContainer}>
                    <Icon name="notifications" size={20} color="white" />
                  </View>
                  <Text style={styles.notificationText}>{item.message}</Text>
                  <TouchableOpacity>
                    <Icon name="close" size={18} color="white" />
                  </TouchableOpacity>
                </View>
                {/* Add horizontal line after each notification item */}
                <View style={styles.notificationLine}></View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notificationItem: {
    paddingVertical:5,
    borderRadius: 10,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  notificationText: {
    color: "white",
    flex: 1,
    marginLeft: 10,
  },
  notificationLine: {
    height: 1,   // Horizontal line height
    backgroundColor: "#ffffff",  // Line color
    marginTop: 10,  // Space between the notification and the line
    opacity: 0.3, // Make it subtle
  },
  iconContainer: {
    width: 30,     // Width of the circular border
    height: 30,    // Height of the circular border
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Making it circular
    borderWidth: 1,   // White border around the icon
    borderColor: "white",
    marginRight: 10,
  },
});

export default NotificationScreen;
