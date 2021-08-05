import { useState } from 'react'
import React from 'react'
import { View, Text } from 'react-native'
import Restaurant from './Restaurant'
import styles from '../styles'
import { useEffect } from 'react'

function Main(){
    
    const [restaurants, setRestauraunts] = useState([])

    useEffect(() => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(allData => {
                setRestauraunts(allData)   
            })
            .catch(err => alert(err))
    }, [])

    return(
        <View>
            <Text>
            {restaurants.map(restaurant => {
                console.log()
                return <Restaurant entireRestaurant={restaurant}/>
            })} 
            </Text>
        </View>
    )
}

export default Main