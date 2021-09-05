import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Input from './components/Input';
import ListItem from './components/ListItem';

export default function App() {

  const [reminderList, setReminderList] = useState([]);

  const handleUserSubmit = (reminderTitle) => {
    setReminderList(reminders => [
      ...reminders, { id: Math.random().toString(), value: reminderTitle}
    ]);

  };

  const handleReminderDelete = (reminderId) => {
    console.log(reminderList)
    setReminderList(reminders => {
      return reminders.filter((r) => r.id !== reminderId);
    });
  };

  return (
    <View style={styles.viewPort}>
      <Input 
        onAdd={handleUserSubmit}
      />

      {/* <ScrollView>
        {reminderList.length === 0 ? <View><Text>Enter a new reminder</Text></View> : 
        reminderList.map((r) => <View  key={r} style={styles.listItem}><Text style={styles.liText}>{r}</Text></View>)}
      </ScrollView> */}
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={reminderList} 
        renderItem={data => (
          <ListItem
            title={data.item.value}
            id={data.item.id}
            onDelete={handleReminderDelete}
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
