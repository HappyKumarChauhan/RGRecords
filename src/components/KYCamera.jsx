import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {PermissionsAndroid, Platform, View, TouchableOpacity, Text} from 'react-native';

const KYCamera = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.front;
  const camera = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const captureSelfie = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        flash: 'off',
        qualityPrioritization: 'quality',
      });
      // Handle captured photo
    }
  };

  if (!hasPermission || !device) return <View />;

  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      
      {/* Face guidance overlay */}
      <View style={styles.overlay}>
        <View style={styles.faceOutline} />
      </View>

      {/* Capture button */}
      <TouchableOpacity style={styles.captureButton} onPress={captureSelfie}>
        <Text style={styles.buttonText}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KYCamera;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceOutline: {
    width: 250,
    height: 350,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: 'white',
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 40,
  }
});
