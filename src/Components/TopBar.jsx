import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({input, setInput, onAddTask}) => {
    return (
        
        <View style={styles.view1}>

            <Text style={styles.title}>TAREAS</Text>

            <TextInput
                  placeholder='Search'
                  style={styles.input}
                  value={input}
                  onChangeText={setInput}
              />

              <TouchableOpacity
                  style={styles.button}
                  onPress={onAddTask}
              >
                  <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>

          </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        backgroundColor: "#EAB2A0",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        marginTop: 20,
    },

    input: {
        width: 150,
        borderBottomColor: "#2D4356",
        borderBottomWidth: 2,
        marginBottom: 8,
    },

    button: {
        width: 150,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "azure",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});