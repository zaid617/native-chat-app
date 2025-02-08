import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { chats } from '../assets/data/data';

const Chat_screen = ({ route }) => {
  const { userId } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Find the chat data for the selected user
    const chatData = chats.find((c) => c.userId === userId);
    if (chatData) {
      // Transform the chat messages into the format required by GiftedChat
      const formattedMessages = chatData.messages.map((msg) => ({
        _id: msg.id,
        text: msg.text,
        createdAt: new Date(msg.timestamp),
        user: {
          _id: msg.sender,
          name: msg.sender === '1' ? 'You' : 'Other User', // Replace with actual user name
        },
      }));
      setMessages(formattedMessages);
    }
  }, [userId]);

  const onSend = (newMessages = []) => {
    // Add the new message to the state
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: '1', // The current user's ID
        }}
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