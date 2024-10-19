import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={style.container}>
      <Text style={{
        fontSize: 30,
      }}>Todo App</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default index