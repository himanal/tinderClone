import { View, Text ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'





const HomeScreen = () => {


   

    const navigation =useNavigation()
  return (
    <View>
        <Text>HomeScreen</Text>
        <Button title='go to chat screen' />
    </View>
  )
}

export default HomeScreen