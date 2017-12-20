//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';

// const onButtonPress = () => {
//     Alert.alert('Login button is clicked!!');
//     Alert.alert('email is',state.email);
//     Alert.alert('passsword is',this.state.password);
// }

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onLoginPress=()=>{
   const {email,password} =this.state;
//    Alert.alert('email is',email);
   if(this.state.email==='test@gmail.com' && this.state.password==='test')
   {
       Alert.alert('succesfully logged in!!!');
       return;
   }
   Alert.alert('please try with valid credentials!!');
   this.emailInput.clear();
   this.passwordInput.clear();
   return;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput style={styles.input}
                    onChangeText={email=>this.setState({email})}
                    value={this.state.text}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    ref={input => { this.emailInput = input }}
                    enablesReturnKeyAutomatically={true}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    onChangeText={password=>this.setState({password})}
                    returnKeyType="go" 
                    ref={input => { this.passwordInput = input }}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});
