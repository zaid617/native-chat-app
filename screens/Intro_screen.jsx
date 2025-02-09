import React, {useState} from 'react';
import {color} from '../assets/colors/color';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import bg_img from '../assets/imgs/intro_bg.jpg';
import pic_1 from '../assets/imgs/pic_1.png';
import pic_2 from '../assets/imgs/pic_2.png';
import pic_3 from '../assets/imgs/pic_3.png';
import pic_4 from '../assets/imgs/pic_4.png';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Intro_screen = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg_img} style={styles.uper_section}>
        <View style={[styles.uper_section_content, {alignItems: 'flex-end'}]}>
          <View
            style={[
              styles.circle,
              styles.uper_section_boxes,
              styles.border_bottom_left_radius,
            ]}>
            <Image source={pic_4} style={[styles.img, {left: -30, top: -8 , width: 200} ]} />
          </View>
          <View style={[styles.circle, styles.uper_section_boxes]}>
            <Image source={pic_2} style={[styles.img, {bottom: 12}]} />
          </View>
        </View>
        <View style={[styles.uper_section_content, {alignItems: 'start'}]}>
          <View style={[styles.circle, styles.uper_section_boxes]}>
            <Image
              source={pic_1}
              style={[styles.img, , {bottom: 10, right: 10}]}
            />
          </View>
          <View
            style={[
              styles.circle,
              styles.uper_section_boxes,
              styles.border_bottom_right_radius,
            ]}>
            <Image source={pic_3} style={[styles.img, {bottom: 2, left: 5}]} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.lower_section}>
        <Text style={styles.bottom_heading}>
          Enjoy New Experience of Chatting With Global Friends
        </Text>
        <Text style={styles.bottom_para}>
          Connect With people around the world for free
        </Text>
        <TouchableOpacity
          style={[styles.btn]}
          activeOpacity={0.8}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => {
            setIsPressed(false);
            navigation.navigate('welcome');
          }}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.footer_text}>
          <Text style={{color: color.text, fontSize: 10}}>PoweredBy</Text>
          <Text style={{color: color.primary, marginLeft: 5, fontSize: 10 , fontWeight: '900'}}>
            Z~Tech
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uper_section: {
    flex: 2,
  },
  lower_section: {
    flex: 1,
  },
  uper_section_content: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  uper_section_boxes: {
    backgroundColor: color.primary,
    height: width / 2.3,
    width: width / 2.3,
    margin: width / 90,
  },
  circle: {
    borderRadius: '50%',
  },
  border_bottom_left_radius: {
    borderBottomLeftRadius: '0%',
    backgroundColor: color.light_gray,
  },
  border_bottom_right_radius: {
    borderBottomRightRadius: '0%',
    backgroundColor: color.light_gray,
  },
  img: {
    width: '100%',
    height: '100%',
    filter: 'grayscale(100%)',
  },
  bottom_heading: {
    fontSize: 16,
    textAlign: 'center',
    color: color.text,
    marginTop: 20,
    fontWeight: '600',
  },
  bottom_para: {
    fontSize: 10,
    textAlign: 'center',
    color: color.text,
    margin: '20',
  },
  btn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: color.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: color.primary,
    marginHorizontal: '40',
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: color.white,
  },
  footer_text: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Intro_screen;
