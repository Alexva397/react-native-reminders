import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const Input = (props) => {
    
    const [reminder, setReminder] = useState('');

    const reminderInput = (userReminder) => {
        setReminder(userReminder);
        console.log(reminder)
      };

      const onReminderAdd = () => {
        props.onAdd(reminder);
        setReminder('');
      };

    return ( 
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.container}>
        <TextInput 
          placeholder='Add a Reminder' 
          style={styles.input} 
          onChangeText={reminderInput}
          value={reminder}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='+ Add' 
              onPress={onReminderAdd}
            />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
        </View>
      </View>
      </Modal>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        textAlign: 'center',
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        width: '70%',
        marginBottom: 10,
      },
      button: {
        borderRadius: 5,
        width: '30%',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '60%',
      }
});