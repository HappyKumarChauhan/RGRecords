import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import ImagePickerModal from '../../components/utils/ImagePickerModal';

const ProfileScreen = ({navigation}) => {
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="keyboard-arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <Text></Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            {!selectedImage ? (
              <Icon name="account-circle" size={80} color="white" />
            ) : (
              <Image
                source={{uri: selectedImage}}
                style={styles.image}
              />
            )}
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setImagePickerVisible(true)}
            >
              <Icon name="photo-camera" size={18} color="#000" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.profileName}>XYZ Name</Text>
            <Text style={styles.profileId}>ID no. 3421111870</Text>
          </View>
        </View>
        <View style={styles.editProfileButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
          >
            <Text style={styles.editProfileText}>✏️ Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {/* Options List */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionItem}>
            <Icon name="person" size={22} color="white" />
            <Text style={styles.optionText}>Account Information</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

          <TouchableOpacity style={styles.optionItem}>
            <Icon name="assignment" size={22} color="white" />
            <Text style={styles.optionText}>Audition Results</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

          <TouchableOpacity style={styles.optionItem}>
            <Icon name="notifications" size={22} color="white" />
            <Text style={styles.optionText}>Notifications</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

          <TouchableOpacity style={styles.optionItem}>
            <Icon name="support" size={22} color="white" />
            <Text style={styles.optionText}>Free Consultation</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

          <TouchableOpacity style={styles.optionItem}>
            <Icon name="help-outline" size={22} color="white" />
            <Text style={styles.optionText}>Help/Support</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

          <TouchableOpacity style={styles.optionItem}>
            <Icon name="settings" size={22} color="white" />
            <Text style={styles.optionText}>Settings</Text>
            <Icon name="chevron-right" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="exit-to-app" size={24} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ImagePickerModal
        visible={imagePickerVisible}
        onClose={() => setImagePickerVisible(false)}
        onImageSelect={imageUri => setSelectedImage(imageUri)}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  content: {
    padding: 10,
  },
  profileSection: {
    alignItems: 'flex-start',
    marginVertical: 15,
    flexDirection: 'row',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight:10,
  },
  image:{
    height:80,
    width:80,
    borderRadius:40,
  },
  editIcon: {
    alignItems: 'center',
    position: 'relative',
    bottom: 25,
    width: 30,
    left: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  profileId: {
    fontSize: 12,
    color: '#ddd',
    marginBottom: 5,
  },
  editProfileButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editProfileText: {
    fontSize: 14,
    color: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  optionsContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontSize: 14,
  },
  logoutButton: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
});

export default ProfileScreen;
