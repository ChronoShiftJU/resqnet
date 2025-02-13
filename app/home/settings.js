import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
    const router = useRouter();

    return (<>
        <Text>Settings page will be added later</Text>
    </>);
}

const styles = StyleSheet.create({
});
