import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ResQNet</Text>
            <Text style={styles.tagline}>Your Emergency Companion</Text>
            <Button mode="contained" onPress={() => router.push('/auth/login')}>
                Get Started
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
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tagline: {
        fontSize: 18,
        color: '#6c757d',
        marginBottom: 30,
    },
});
