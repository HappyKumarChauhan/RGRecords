import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CameraModal from '../kyc/CameraModal';
import LinearGradient from 'react-native-linear-gradient';

const ImagePickerModal = ({visible, onClose, onImageSelect}) => {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageFromGallery = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (
        !response.didCancel &&
        !response.error &&
        response.assets.length > 0
      ) {
        const image = response.assets[0];
        setSelectedImage(image.uri);
        onImageSelect(image.uri);
        onClose();
      }
    });
  };
  const handleCapture = photo => {
    setSelectedImage(`file://${photo.path}`);
    onImageSelect(`file://${photo.path}`);
    setCameraVisible(false);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <LinearGradient colors={[ '#27363E','#306165']} style={styles.modalContent}>
          <Text style={styles.title}>Choose an Option</Text>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={pickImageFromGallery}
          >
            <Text style={styles.optionText}>📂 Pick from Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setCameraVisible(true)}
          >
            <Text style={styles.optionText}>📷 Take a Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Open Camera Modal when "Take a Photo" is clicked */}
      {cameraVisible && (
        <CameraModal
          visible={cameraVisible}
          onClose={() => setCameraVisible(false)}
          onCapture={handleCapture}
          mode="selfie" // Default to selfie mode, you can modify this
        />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    width: '100%',
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ImagePickerModal;
