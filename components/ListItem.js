import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const listItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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
