import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../assets/imgs/wellcome_logo.png'
import email from '../assets/imgs/email.png'
import google from '../assets/imgs/google.png'
import { color } from '../assets/colors/color'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window');

const Wellcome_screen = ({navigation}) => {

  return (
    <SafeAreaView style={[styles.upper_view]}>
      <View style={styles.upper_view}>
        <Image source={logo}  style={{width:"200" , height: "200"}}/>
        <Text style={{fontWeight: "700" , fontSize: 18}}>Wellcome to the app!</Text>
        <Text style={{textAlign:"center" , fontSize: 10, paddingHorizontal: 20 , paddingVertical: 10}}>This is a wellcome screen, you can put here some info about the app</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Main')} activeOpacity={0.7} style={styles.login_btn}>
          <Image source={email} style={{width: 31 , height:22}}/>
          <Text style={{marginHorizontal:20 , fontSize:12, fontWeight: 600}}>Login With Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Main')} activeOpacity={0.7} style={styles.login_btn}>
          <Image source={google} style={{width: 30 , height:22}}/>
          <Text style={{marginHorizontal:20 , fontSize:12, fontWeight: 600}}>Login With Google</Text>
        </TouchableOpacity>
          <Text style={{fontSize: 12 , textAlign: 'center' , marginTop: 10}}>Don't have an account? <Text style={{color: 'blue'}}>Sign Up</Text></Text>
      </View>
      <View style={styles.lower_view}>
        <Text style={{fontSize: 10}}>
          Made with ❤️ by <Text style={{color: color.primary}}>Zaid</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  upper_view: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower_view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  login_btn: {
    borderWidth: 1, 
    borderColor: 'gray', 
    color: color.primary,
    padding: 10,
    borderRadius: 10,
    width: width - 50,
    marginHorizontal: 10,
    marginVertical: 5,
    selfAlign: "stretch",
    flexDirection: "row",
    alignItems: "center",
  }
})

export default Wellcome_screen