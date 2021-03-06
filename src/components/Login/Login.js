import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    {/* <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} /> */}

                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

//defining styles to our components...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title: {
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

