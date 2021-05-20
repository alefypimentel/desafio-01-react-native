import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { Header } from '../components/Header';
import { Header } from '../components/Header.ios';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import Dark from '../assets/icons/Dark.png';
import Light from '../assets/icons/Light.png';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(false);
  const [iconTheme, setIconTheme] = useState('light');

  function handleTheme() {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }

  useEffect(() => {
    if (theme) {
      setIconTheme('light');
    } else {
      setIconTheme('dark');
    }
  }, [theme]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === '') return;

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    const markTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )

    setTasks(markTask);
  }

  function handleRemoveTask(id: number) {
    setTasks(task => task.filter(item => item.id !== id))
  }

  return (
    <View style={[styles.page, theme ? dark.page : styles.page]}>
      <Header themes={theme} />

      <TouchableOpacity style={styles.themeBtn} onPress={handleTheme}>
        {theme ? (
          <Image style={[styles.themeIcon, {tintColor: '#9347CA'}]} source={Dark} />
        ) : (
          <Image style={[styles.themeIcon, {tintColor: '#fff'}]} source={Light} />
        )}
      </TouchableOpacity>

      <TodoInput addTask={handleAddTask} themes={theme} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        themes={theme}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex:1, 
    backgroundColor: '#fff',
  },
  themeBtn: {
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 3,
    position: 'absolute',
    left: 10,
    top: 50,
  },
  themeIcon: {
    height: 18,
    width: 18,
  }
});

const dark = StyleSheet.create({
  page: {
    backgroundColor: '#191D3A',
  }
});