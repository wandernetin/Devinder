import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Image, TextInput, Text, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png'
import { bold } from 'ansi-colors';

export default function Login() {
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}>
            <Image source={logo} />
            <TextInput placeholder="Type your github user" 
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',

    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

})