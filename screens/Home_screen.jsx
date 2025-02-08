import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home_screen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Text>Home_screen</Text>
      <Pressable>
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home_screen