import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { chats } from '../assets/data/data';

const Chat_screen = ({ route }) => {
  const { userId } = route.params || {};
  const [messages, setMessages] = useState([]);

  if (!userId) return <View style={styles.container}><Text>No User ID</Text></View>;

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
        user: { _id: 1, name: 'You' }, // Ensure consistent format
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
