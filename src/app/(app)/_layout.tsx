import React from 'react'
import { Stack } from 'expo-router'

export function Layout() {
  return (
    <Stack>
        <Stack.Screen
            name="index"
            options={{
            headerShown: false,
            title: 'Home',
            }}
        />
    </Stack>
  )
}
