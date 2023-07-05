import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

const TaskList = ({list, onPressTask}) => {
  return (
    <View style={styles.view2}>
              <FlatList
                  data={list}
                  keyExtractor={task => task.id}
                  renderItem={({item}) => RenderItemTask({item, onPressTask})}
              /> 
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  view2: {
    flex: 3,
    backgroundColor: "#435B66",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 15,
  },
});