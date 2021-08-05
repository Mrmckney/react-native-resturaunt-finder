import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import styles from '../styles'

function AddNewScreen({navigation}) {

    const [restaurantName, setRestaurantName] = useState('')
    const [address, setAddress] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [rating, setRating] = useState('')

    const newRestaurant = {
        name: restaurantName,
        address: address,
        photoUrl: photoUrl,
        rating: rating
    }

    const handleNewRestaurant = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
            .then(() => {
                Alert.alert('Added New Restaurant')
                navigation.navigate('Main')
            }
                )
            .catch(err => alert(err))
    }

    return(
        <View>
            <TextInput
                placeholder='Restaurant Name'
                style={styles.inputBox}
                onChangeText={text => setRestaurantName(text)}
            />
            <TextInput
                placeholder='Address'
                style={styles.inputBox}
                onChangeText={text => setAddress(text)}
            />
            <TextInput
                placeholder='photo URL'
                style={styles.inputBox}
                onChangeText={text => setPhotoUrl(text)}
            />
            <TextInput
                placeholder='rating'
                style={styles.inputBox}
                onChangeText={text => setRating(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={handleNewRestaurant}>
                <Text style={{ color: 'black' }}>Send New Restaurant</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewScreen