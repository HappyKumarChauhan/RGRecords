import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const PostEventDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='keyboard-arrow-left' size={30} color='white' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/9acd/1f77/5ce1994b905750cc34f37ddf33a81cdf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HAHC4IgRIOD1~2mNcIedZpjt3iA9~czw7AhUri7~ujI8kkSLbnYpM0Hpbj9coibDXRAHplhnC6akpBzdruASHnMUfE1X5ZZVhflQEjfXNqv8N64YmRKiEHhl-svtcWQWaeSZy5XLQZ4bQXV5yNbWdAEdAruQXR7FUoEVW-e1l2STCBgGG8vb2dKeyvBO6q7xWhAX1di4f2W6xzTIXROb9aunWE4O4WWIWj0iuAQTyIdXtPgsV6SB9zoGEsH5P4FdwYYYmd77QD-kdQslrWYy~w-DlCVBKXBfIqvcoarjPirojqy5q3VYZJTNevsAp91Cz0Vb1sWW~M8uePVkO5JNAQ__' }}
          style={styles.eventImage}
        />

        <Text style={styles.dateText}>Date: 14 Jan 2025</Text>

        <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

        <View style={styles.detailsRow}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Singing</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Dance</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Poetry</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Modeling</Text></TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Lorem ipsum dolor sit amet,</Text>
            <Text style={styles.boldDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur, inventore maxime magni soluta voluptate quod dolores ex cum fugiat, nostrum, quam sit quaerat? Nobis reiciendis placeat pariatur quo similique tempore, debitis nemo! Itaque, harum. Dolor pariatur. Nobis reiciendis placeat pariatur quo similique tempore, debitis nemo! Itaque, harum. Dolor pariatur.
            </Text>
          </View>
        </View>
      </ScrollView>
        <View style={{ paddingHorizontal: 15 }}>
      <TouchableOpacity style={styles.applyButton}
      onPress={() => {navigation.navigate('Home')}}>
        <Text></Text>
        <Text style={styles.applyText}>Back To Home</Text>
          <Icon name="keyboard-arrow-right" size={30} color="black"/>
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
  horizontalLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  eventImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  loremText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'justify',
    marginBottom: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10
  },
  buttonText: {
    color: '#173036',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 2,
    // justifyContent: 'center',
    paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boldDescription: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  applyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  applyText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
});

export default PostEventDetailsScreen;
