import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GiftedChat } from 'react-native-gifted-chat';
import { chats } from '../assets/data/data';
import img from '../assets/imgs/profile_img.png';


const { width , height } = Dimensions.get('window');

const Chat_screen = ({ route, navigation }) => {
  const { userId, name } = route.params || {};
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-between' , width: width * 0.8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={ img } 
            style={{ width: 35, height: 35, borderRadius: 50, marginRight: 10 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' , color: '#fff' }}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="call" size={30} color={'#fff'} />
          <Icon name="more-vert" size={30} color={'#fff'} />
        </View>
        </View>
      ),
    });
  }, [navigation, name]);

  if (!userId) {
    return <View style={styles.container}><Text>No User ID</Text></View>;
  }

  useEffect(() => {
    const chatData = chats.find((c) => c.userId.toString() === userId.toString());
    if (chatData) {
      const formattedMessages = chatData.messages.map((msg) => ({
        _id: msg.id, 
        text: msg.text,
        createdAt: msg.timestamp ? new Date(msg.timestamp) : new Date(),
        user: {
          _id: msg.sender.toString(),
          name: msg.sender === '1' ? 'You' : 'Other User',
        },
      }));
      setMessages(formattedMessages);
    }
  }, [userId]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages.map(msg => ({
        ...msg,
        user: { _id: 1, name: 'You' },
      })))
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Chat_screen;
