import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

export default function Layout() {
  return (
    <Tabs>
        <Tabs.Screen 
          name="index" 
          options={{headerShown: false, title: "Home",
            tabBarIcon: ({ color, size}) => (
              <AntDesign
                name="home"
                size={size}
                color={color} 
              />
            ),
           }}
          />

          <Tabs.Screen 
          name="exercises" 
          options={{title: "Exercises", headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <AntDesign
                name="book"
                size={size}
                color={color} 
              />
            ),
           }}
          />

          <Tabs.Screen 
          name="workout" 
          options={{title: "Workout", headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <AntDesign
                name="pluscircle"
                size={size}
                color={color} 
              />
            ),
           }}
          />

          <Tabs.Screen 
          name="active-workout" 
          options={{title: "Active Workout", headerShown: false, href: null,
            tabBarStyle: {
              display: "none",
            },
           }}
          />

          <Tabs.Screen 
          name="history" 
          options={{title: "History", headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <AntDesign
                name="pluscircle"
                size={size}
                color={color} 
              />
            ),
           }}
          />

          <Tabs.Screen 
          name="profile" 
          options={{title: "Profile", headerShown: false,
            // tabBarIcon: ({ color, size}) => (
            //   <Image
            //     source={user?.imageUrl ?? user?.externalAccounts[0]?.imageUrl}
            //     className='rounded-full'
            //     style={{ width: 28, height: 28, borderRadius: 100 }}
            //   />
            // ),
           }}
          />

          
    </Tabs>
  )
}