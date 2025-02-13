import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Icon } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Add registration logic here
        alert("Registration Successful!");
        router.push('/auth/profile-setup');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput mode='outlined'
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName} />

            <TextInput mode='outlined'
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address" />

            <TextInput mode='outlined'
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad" />

            <TextInput mode='outlined'
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry />

            <TextInput mode='outlined'
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry />

            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
                <Icon source={termsAccepted ? "checkbox-marked" : "checkbox-blank-outline"}  size={25} />
                <Text style={styles.termsText}>I agree to the Terms & Conditions</Text>
            </TouchableOpacity>

            <Button mode='contained' onPress={handleRegister} disabled={!termsAccepted}>
                Register
            </Button>
            <Button onPress={() => router.push('/auth/login')} >
                Already have an account? Login
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 6,
        backgroundColor: '#fff',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        gap: 10,
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: '#007bff',
    },
    termsText: {
        fontSize: 14,
        color: '#495057',
    },
    loginLink: {
        marginTop: 20,
        color: '#007bff',
    },
});
