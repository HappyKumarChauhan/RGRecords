import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
    // useEffect(() => {
    // setTimeout(() => {
    //     navigation.navigate('SelectUser')
    // }, 1000);
    // }, [])
    
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.main}>
            <ImageBackground
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f873/7185/6241fa22bb30fe971b8a772b127be54a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K535hPRgq3mwolWIWcC2HzLUJ-8MF-N~rw7H3So6342rXWO5sBGPsAY91U5fFPDquFswAlu9I5y7uZ9I9-j5Qg-MQJarunfjTTZr~55G9qk~36VFkz02N-7LBlhrUkaGEH7xMxwK~Qpm9gcqWYebCP0Y~KFMkWvl19rie0Q0OtrpR4I6WWiNcr9VBFdaegvIy8OpSmTHgNPbsJ3c4pfqWQGMqPWfFGffas97drcsQ36Ba47MUiTzusuS7H5TTlbLpjEs92vnkZ0ER0QjxjsIno3kgiWd0i2sDyx6V9DM2AsPs50jkha7CrjV5sOsEHmgZug2aQ1AknMNNkdCe33o7w__' }}
                // resizeMode='repeat'
                style={styles.backgroundImage}
            >
                <View style={styles.topSection}>
                    <Text style={styles.topSectionText}>RG</Text>
                </View>
                <View style={styles.middleSection}>
                    <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/9096/8eef/2c21d68c0fa6817f2ffe4e7df94d1901?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwkMDAvOylpEtFbTFfzp0np4f-F0wLfcSSwKMRlvHHib-lc~BkiTT3HmuBEMmsCfqi4rqsMBjAZPBQavmRAwpQbX2YvDJFhfDT0e3w8EldHiaVXhRKUAsEahv077J8V0mWa~XQtd~7xy3mV9NgYw2gKoY4bg~3l9yTzeg5VGe2W44iZ8EU~hkMVwCrMcgesuXe1W2IIH7WkZX0~gGCozsK236RF6dBsy4zuSDt2KV97hkNgKkbgO6m7GGgIwSajyaJv0--u0xAcRjcQuoPDcu3dsV4YKPoCFqMKvlv-pG~XC6Z1KK796NadnGMX2PRJldkMMWhSHWyAR5s1Vvuqs9w__' }}
                        style={styles.middleSectionImage}
                    />
                    <View style={styles.middlewSectionTextContainer}>
                        <Text style={styles.middleSectionHeading}>Welcome to RG Groups -</Text>
                        <Text style={styles.middleSectionContent}>"Where Talent Meets Opportunity Unleash your, potential, showcase you passion and let the world see your brilliance."</Text>
                    </View>
                </View>
                <View style={styles.bottomSection}>
                    <TouchableOpacity
                        style={styles.exploreButton}
                        onPress={() => { navigation.navigate('SelectUser') }}>
                        <Text style={styles.exploreButtonText}>Explore &rarr;</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </LinearGradient>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    topSection: {

    },
    topSectionText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 700
    },
    middleSection: {
        alignItems: 'center'
    },
    middleSectionImage: {
        width: 300,
        height: 300
    },
    middlewSectionTextContainer: {
        alignItems: 'center'
    },
    middleSectionHeading: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: Platform.select({
            android: 'Playwrite In', // Name used in assets/fonts
          }),
        color: '#A3EEE8',
        lineHeight: 28,
        textDecorationLine: 'underline',
        marginBottom: 8
    },
    middleSectionContent: {
        color: 'white',
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 20
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    exploreButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        width: 120,
        borderRadius: 20
    },
    exploreButtonText: {
        fontSize: 16,
        fontWeight: 700,
    }
})