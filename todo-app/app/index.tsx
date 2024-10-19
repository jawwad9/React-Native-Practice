import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [inputVal, setInputVal] = useState('');
  const [list, setList] = useState<string[]>(['hello']);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateInput, setUpdateInput] = useState('');
  const [index, setIndex] = useState(0);



  // render addTodo function
  const addTodo = () => {
    console.log(inputVal);
    list.push(inputVal)
    setList([...list])
    setInputVal ("")
  }

// delete todo
  const deleteBtn = (index: number) => {
    console.log(deleteBtn, index);
    list.splice(index, 1);
    setList([...list]);
  }

  //edit todo
  const editBtn = (index: number) => {
    console.log(editBtn, index);
    list.splice(index , 1 , updateInput)
    setList([...list])
    setModalVisible(false)
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

{
  list.length > 0 ? <FlatList
  style={styles.flat}
  data={list}
  renderItem={({item, index}) =>{ 
  return  <View style={styles.item}>
  <Text style={styles.title}>{item}</Text>
  <View>
      <TouchableOpacity style={styles.ListBtn} onPress={() => {
              setIndex(index)
              setModalVisible(true)
            }}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListBtn} onPress={() => deleteBtn(index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
  </View>
</View>
}
}
  keyExtractor={(item, index) => index.toString()}
/>: <Text style={styles.notFound}>No Todo...</Text>

}




<View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo!</Text>
              <TextInput
                style={styles.updateInput}
                onChangeText={setUpdateInput}
                value={updateInput}
              />
              <Pressable
                style={[styles.modalBtn, styles.buttonClose]}
                onPress={() => editBtn(index)}>
                <Text style={styles.textStyle}>Update Todo</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      </View>


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
  updateInput: {
    margin: 20,
    width: 200,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 170,
  },
  flat: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  notFound: {
    fontSize: 50,
    marginVertical: 30,
    textAlign: 'center'
  },
  ListBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default index