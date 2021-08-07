import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../styles'

function Box({entireRestaurant}) { 

    const {name, photoUrl, rating, address} = entireRestaurant

    return(
        <View>
            <Image source={{uri:photoUrl}} style={{width: 450, height: 200}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.add}>{address}</Text>
            <Text style={styles.rating}>{rating}⭐︎</Text>
        </View>
    )
}

export default Box