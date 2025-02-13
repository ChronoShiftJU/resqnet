import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in with:', emailOrPhone, password);
        router.push('/home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to ResQNet</Text>

            <TextInput
                mode='outlined'
                style={styles.input}
                placeholder="Email or Phone"
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                keyboardType="email-address"
            />

            <TextInput
                mode='outlined'
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button style={styles.loginBtn} onPress={handleLogin} mode="contained">
                Login
            </Button>
            <Button onPress={() => alert('Forgot Password clicked!')}>
                Forgot Password?
            </Button>
            <Button onPress={() => router.push('/auth/register')}>
                Don't have an account? Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 6,
        backgroundColor: '#fff',
    },
    loginBtn: {
        width: '60%',
        marginBottom: 20,
        marginTop: 25
    }
});
