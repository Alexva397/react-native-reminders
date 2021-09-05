import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const listItem = (props) => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={.5}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: 'grey',
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4
      },
});

export default listItem;
