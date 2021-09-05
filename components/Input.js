import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Input = (props) => {
    
    const [reminder, setReminder] = useState('');

    const reminderInput = (userReminder) => {
        setReminder(userReminder);
        console.log(reminder)
      };

    return ( 
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
          onPress={() => props.onAdd(reminder)}
        />
      </View>
    );
};

export default Input;

const styles = StyleSheet.create({
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