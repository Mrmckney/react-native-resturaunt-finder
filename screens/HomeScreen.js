import React, { useState, useEffect } from 'react'
import { View, Text, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native'

import Box from '../components/Box'
import styles from '../styles'


function Main({ navigation }) {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(allData => {
                setRestaurants(allData)
            })
            .catch(err => alert(err))
    }, [])

    return (
        <View >
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {restaurants?.map(restaurant => {
                        return (
                            <View key={restaurant.id}>
                                <Box entireRestaurant={restaurant} />
                                <Button title='Details' color='red' onPress={() => {
                                    navigation.navigate('Restaurant', { restaurant: restaurant })
                                }}
                                />
                            </View>
                        )
                    })}
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Main

