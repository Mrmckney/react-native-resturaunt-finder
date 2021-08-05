import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Header() {
    return(
        <View>
            <Text style={styles.header}>
                Recommended Restaurants
            </Text>
        </View>
    )
}

export default Header