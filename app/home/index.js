import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.sosButton, styles.self]}
                activeOpacity={0.5}
                onPress={() => router.push('/sos/self')}>
                <Text style={styles.sosText}>
                    Activate SOS for Self
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.sosButton, styles.other]}
                activeOpacity={0.5}
                onPress={() => router.push('/sos/other')}>
                <Text style={styles.sosText}>
                    Activate SOS for Others
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        padding: 12,
    },
    sosButton: {
        marginHorizontal: 6,
        borderRadius: 10,
        elevation: 6,
        justifyContent: 'center',
    },
    self: {
        flex: 3,
        backgroundColor: '#bf2e4b',
    },
    other: {
        flex: 1,
        backgroundColor: '#6f3c91',
    },
    sosText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
