import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Input from './components/Input';

import ListItem from './components/ListItem';

export default function App() {

  const [reminderList, setReminderList] = useState([]);

  const handleUserSubmit = (reminderTitle) => {


    setReminderList(reminders => [
      ...reminders, { key: (Math.random() + 1).toString(36).substring(7), value: reminderTitle}
    ]);
  };

  return (
    <View style={styles.viewPort}>
      {/* <View style={styles.container}>
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
      </View> */}
      <Input 
        onAdd={handleUserSubmit}
      />

      {/* <ScrollView>
        {reminderList.length === 0 ? <View><Text>Enter a new reminder</Text></View> : 
        reminderList.map((r) => <View  key={r} style={styles.listItem}><Text style={styles.liText}>{r}</Text></View>)}
      </ScrollView> */}
      <FlatList 
        data={reminderList} 
        renderItem={data => (
          <ListItem
            title={data.item.value} 
          />
        )} 
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    padding: 30, 
    marginTop: 30,
  },

  // liText: {
  //   color: 'white',
  //   fontSize: 16
  // }
});
