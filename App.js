import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './screens/HomeScreen'
import Restaurant from './screens/RestaurantScreen'
import AddNewScreen from './screens/AddNewScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ title: 'Recomended Restaurants' }}
        />
        <Stack.Screen
          name='Restaurant'
          component={Restaurant}
          options={{ title: 'Restaurant' }}
        />
        <Stack.Screen
          name='AddNewRestaurant'
          component={AddNewScreen}
          options={{ title: 'Add New Restaurant'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}