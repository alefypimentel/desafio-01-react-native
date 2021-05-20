import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface ThemesProps {
  themes: boolean;
}

function FlatListHeaderComponent({ themes }: ThemesProps) {
  return (
    <View>
      <Text style={[styles.header, themes ? dark.header : styles.header]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  themes: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, themes }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done ? styles.taskButtonDone : styles.taskButton, 
              themes && item.done ? dark.taskButtonDone : ( themes ? dark.taskButton : styles.taskButton )
            ]}
          >
            <View 
              testID={`marker-${index}`}
              style={[
                item.done ? styles.taskMarkerDone : styles.taskMarker, 
                themes && item.done ? dark.taskMarkerDone : ( themes ? dark.taskMarker : styles.taskMarker )
              ]}
            />
            <Text 
              style={[
                item.done ? styles.taskTextDone : styles.taskText, 
                themes && item.done ? dark.taskTextDone : ( themes ? dark.taskText : styles.taskText )
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent themes={themes} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})

const dark = StyleSheet.create({
  header: {
    color: '#fff',
  },
  taskButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  taskMarker: {
    borderColor: '#fff',
  },
  taskText: {
    color: '#fff',
  },
  taskButtonDone: {
    backgroundColor: 'rgba(65, 58, 111, 0.5)',
  },
  taskMarkerDone: {
    backgroundColor: '#9347CA',
  },
  taskTextDone: {
    color: '#fff',
  }
})