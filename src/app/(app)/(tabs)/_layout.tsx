import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{headerShown: false, title: "Home" }} />
    </Tabs>
  )
}