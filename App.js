import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [reminder, setReminder] = useState('');

  const [reminderList, setReminderList] = useState([]);

  const reminderInput = (userReminder) => {
    setReminder(userReminder);
  }

  const handleUserSubmit = () => {
    console.log(reminder)

    setReminderList([...reminderList, reminder]);
  }

  return (
    <View style={styles.viewPort}>
      <View style={styles.container}>
        <TextInput 
          placeholder='Add a Reminder' 
          style={styles.input} 
          onChangeText={reminderInput}
          value={reminder}
        />
        <Button 
          title='+ Add' 
          style={styles.button}
          onPress={handleUserSubmit}
        />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    padding: 30, 
    marginTop: 30,
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    width: '70%',
  },
  button: {
    borderRadius: 5,
    margin: 10,
  },
});
