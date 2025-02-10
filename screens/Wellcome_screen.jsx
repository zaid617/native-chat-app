import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, PixelRatio } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../assets/imgs/wellcome_logo.png'
import email from '../assets/imgs/email.png'
import google from '../assets/imgs/google.png'
import { color } from '../assets/colors/color'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');
const scaleFont = size => size * PixelRatio.getFontScale();

const Wellcome_screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to the app!</Text>
        <Text style={styles.subtitle}>
          This is a welcome screen, you can put here some info about the app
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          activeOpacity={0.7}
          style={styles.login_btn}>
          <Image source={email} style={styles.icon} />
          <Text style={styles.btn_text}>Login With Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          activeOpacity={0.7}
          style={styles.login_btn}>
          <Image source={google} style={styles.icon} />
          <Text style={styles.btn_text}>Login With Google</Text>
        </TouchableOpacity>
        <Text style={styles.signup_text}>
          Don't have an account? <Text style={styles.signup_link}>Sign Up</Text>
        </Text>
      </View>
      <View style={styles.lower_view}>
        <Text style={styles.footer_text}>
          Made with ❤️ by <Text style={styles.footer_highlight}>Zaid</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_view: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  lower_view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '700',
    fontSize: scaleFont(18),
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: scaleFont(8),
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
  },
  login_btn: {
    borderWidth: 1,
    borderColor: 'gray',
    color: color.primary,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
    width: width * 0.8,
    marginVertical: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.08,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  btn_text: {
    marginHorizontal: width * 0.05,
    fontSize: scaleFont(9),
    fontWeight: '600',
  },
  signup_text: {
    fontSize: scaleFont(9),
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  signup_link: {
    color: 'blue',
  },
  footer_text: {
    fontSize: scaleFont(10),
  },
  footer_highlight: {
    color: color.primary,
  },
});

export default Wellcome_screen;
