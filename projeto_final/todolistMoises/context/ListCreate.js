import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);
  const [tasksListFilter, setTasksListFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryList, setCategoryList] = useState([
    { key: "Trabalho", value: "Trabalho", icon: "iconWork.png" },
    { key: "Casa", value: "Casa", icon: "iconCasa.png" },
    { key: "Pesoal", value: "Pesoal", icon: "iconPerfil.png" },
    { key: "Family", value: "Family", icon: "iconFamily.png" },
    { key: "Estudar", value: "Estudar", icon: "studie.png" },
  ]);

  const addTask = (tarefa) => {
    setTasksList([...tasksList, tarefa]);
  };

  const removeTask = (tarefa) => {
    console.log(tarefa);
    tasksList.splice(tasksList.indexOf(tarefa), 1)
    setTasksList([...tasksList]);
  };

  const restoreList = async () => {
    try {
      const tasks = await AsyncStorage.getItem("tasks");
      setTasksList(JSON.parse(tasks) || []);
    } catch (err) {
      setTasksList([]);
    }
  };

  const saveList = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasksList));
    } catch (err) {
      console.log("AQUI", err);
    }
  };


  useEffect(() => {
    restoreList();
  }, []);

  useEffect(() => {
    saveList();
  }, [tasksList]);

  useEffect(() => {
    setTasksListFilter(
      tasksList.filter((tarefa) => tarefa.category == selectedCategory || selectedCategory == null)
    );
  }, [selectedCategory, tasksList]);

  return (
    <ListContext.Provider
      value={{
        tasksList,
        addTask,
        removeTask,
        categoryList,
        setSelectedCategory,
        selectedCategory,
        tasksListFilter,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
