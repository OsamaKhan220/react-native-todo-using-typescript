import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CompProps {
    title: string
}

const Header = (props: CompProps) => {
    return (
        <View style={styles.container}>
            <Text style= { styles.titleText }> {props.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0066ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    titleText:{
        color: '#fff',
        fontSize: 30,
        padding: 26
    }
});

export default Header;