import React from 'react'
import { View, Text, Image, Button } from 'react-native'

import styles from '../styles'

function Restaurant({route, navigation}) {

    const {photoUrl, name, address, rating} = route.params.restaurant
    
    return(
        <View>
            <Image style={{width: 450, height: 250}} source={{uri:photoUrl}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <Button title='Add New Restaurant' onPress={() => navigation.navigate('AddNewRestaurant')}/>
        </View>
    )
}

export default Restaurant