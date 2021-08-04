import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Header() {
    return(
        <View>
            <Text style={styles.header}>
                Recommended Restauraunts
            </Text>
        </View>
    )
}

export default Header