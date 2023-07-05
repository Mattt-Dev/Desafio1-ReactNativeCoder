import { StyleSheet, View} from "react-native";
import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import TaskList from "../Components/TaskList";
import ModalTask from "../Components/Modal";

const MainScreen = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState([]);

  const onAddTask = () => {
    console.log("Se agrego una task");
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
  };

  const onPressTask = (task) => {
    setTaskActive(task);
    setModalVisible(!modalVisible);
  };

  const onPressStatus = (status) => {
    const remainTask = list.filter((taskList) => taskList.id !== taskActive.id);
    const orderedList = [
      ...remainTask,
      { ...taskActive, completed: status },
    ].sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setList(orderedList);
    setModalVisible(!modalVisible);
  };

console.log(list);

  return (
    <View style={styles.container}>
      <TopBar input={input} setInput={setInput} onAddTask={onAddTask} />
      <TaskList list={list} onPressTask={onPressTask} />
      <ModalTask
        modalVisible={modalVisible}
        Esr
        setModalVisible={setModalVisible}
        taskActive={taskActive}
        onPressStatus={onPressStatus}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  view1: {
    flex: 1,
    backgroundColor: "azure",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  view2: {
    flex: 3,
    backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 15,
  },

  input: {
    width: 150,
    borderBottomColor: "deepskyblue",
    borderBottomWidth: 2,
    marginBottom: 8,
  },

  button: {
    width: 150,
  },

  task: {
    width: 200,
    backgroundColor: "azure",
    padding: 10,
    marginBottom: 15,
  },
});
