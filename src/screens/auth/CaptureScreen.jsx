import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CaptureScreen = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const devices = useCameraDevices();
    const device = devices.back;
    const camera = useRef(null);

    if (!device) return <Text>Loading Camera...</Text>;

    const takePhoto = async () => {
        if (camera.current) {
            const photo = await camera.current.takePhoto();
            setPhoto(photo.path);
        }
    };

    return (
        <View style={styles.container}>
            {!photo ? (
                <Camera
                    ref={camera}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    photo={true}
                />
            ) : (
                <Image source={{ uri: `file://${photo}` }} style={styles.preview} />
            )}

            <View style={styles.controls}>
                {photo ? (
                    <TouchableOpacity style={styles.button} onPress={() => setPhoto(null)}>
                        <Text style={styles.text}>Retake</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
                        <Icon name="photo-camera" size={40} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    preview: { width: '100%', height: '100%', resizeMode: 'contain' },
    controls: { position: 'absolute', bottom: 50, flexDirection: 'row' },
    button: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginHorizontal: 10 },
    captureButton: { backgroundColor: '#27363E', padding: 20, borderRadius: 50 },
    text: { color: '#27363E', fontWeight: 'bold' },
});

export default CaptureScreen;
