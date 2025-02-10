import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {users} from '../assets/data/data';
import img from '../assets/imgs/profile_img.png';
import logo from '../assets/imgs/logo_white.png';

const {width, height} = Dimensions.get('window');
const scaleFont = size => size * PixelRatio.getFontScale();

const Home_screen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
<View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: width * 0.97,
  }}>
  
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={logo}
      style={{
        width: width * 0.18, 
        height: width * 0.1,
        borderRadius: (width * 0.12) / 2,
      }}
    />
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Z-Chat</Text>
  </View>
  <View style={{ flexDirection: 'row' }}>
  <TouchableOpacity>
    <Icon name="search" size={30} color={'#fff'} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="more-vert" size={30} color={'#fff'} />
      </TouchableOpacity>
  </View>
</View>

      ),
    });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() =>
        navigation.navigate('Chat', {userId: item.id, name: item.name})
      }>
      <Image source={img} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    padding: width * 0.05,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.13) / 2,
    marginRight: width * 0.04,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: scaleFont(12),
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: scaleFont(9),
    color: '#666',
  },
  timestamp: {
    fontSize: scaleFont(8),
    color: '#999',
  },
});

export default Home_screen;
