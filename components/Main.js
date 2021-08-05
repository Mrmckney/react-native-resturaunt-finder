import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import Restaurant from './Restaurant'
import styles from '../styles'


function Main(){
    
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(allData => {
                setRestaurants(allData)   
            })
            .catch(err => alert(err))
    }, [])

    return(
        <View>
            <Text>
            {restaurants?.map(restaurant => {
                return <Restaurant entireRestaurant={restaurant}/>
            })} 
            </Text>
        </View>
    )
}

export default Main