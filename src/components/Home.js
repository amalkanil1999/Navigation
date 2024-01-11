import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function Home({ navigation, route }) {
    // const {id,name} = route.params
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
          <Text>Home Screen</Text>
          <Button title="Go to about screen" onPress={() => navigation.navigate('About')} />
          <Button title="Go to settings screen" onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

const styles = StyleSheet.create({})