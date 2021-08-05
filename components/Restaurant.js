import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../styles'

function Restaurant({entireRestaurant}) {

    const {photoUrl, name, address} = entireRestaurant
    
    return(
        <View>
            <Text>
                <Image style={{width: 450, height: 250}} source={{uri:photoUrl}}/>
            </Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.add}>{address}</Text>
        </View>
    )
}

export default Restaurant