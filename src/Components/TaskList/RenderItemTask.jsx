import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {
  return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={item.completed ? styles.taskCompleted : styles.task} key={item.id}>
                <Text>{item.task}</Text>
            </View>
        </Pressable>
  )
}

export default RenderItemTask

const styles = StyleSheet.create({
  task: {
    width: 200,
    backgroundColor: "azure",
    padding: 10,
    marginBottom: 15,
  },

  taskCompleted: {
    width: 200,
    backgroundColor: "#1B9C85",
    padding: 10,
    marginBottom: 15,
  },
});
