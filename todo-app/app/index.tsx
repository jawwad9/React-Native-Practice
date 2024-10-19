import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [inputVal, setInputVal] = useState('');


  const addTodo = () => {
    console.log(inputVal);
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.todoTitle}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputVal}
        value={inputVal}
        placeholder='Enter Todo '
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Click</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
todoTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10
  },
  input: {
    height: 40,
    marginHorizontal: 30,
    marginVertical : 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 170,
  },
})

export default index