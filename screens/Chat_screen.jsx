import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { chats } from '../assets/data/data';

const Chat_screen = ({ route }) => {
  const { userId } = route.params;
  const [messages, setMessages] = useState([]);

  console.log("userId", userId);

  useEffect(() => {
    const chatData = chats.find((c) => c.userId == userId);

    if (chatData) {
      const formattedMessages = chatData.messages.map((msg) => ({
        _id: msg.id, 
        text: msg.text,
        createdAt: new Date(msg.timestamp) || new Date(),
        user: {
          _id: msg.sender,
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
        user: { _id: '1', name: 'You' },
      })))
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: '1' }}
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
