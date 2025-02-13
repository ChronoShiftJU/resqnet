import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button, Divider } from 'react-native-paper';

export default function ProfileSetupScreen() {
    const router = useRouter();
    const [medicalRecords, setMedicalRecords] = useState([]);
    const [emergencyContacts, setEmergencyContacts] = useState([]);

    const handleAddMedicalRecord = () => {
        setMedicalRecords([...medicalRecords, `Medical Record ${medicalRecords.length + 1}`]);
    };

    const handleAddContact = () => {
        setEmergencyContacts([...emergencyContacts, `Contact ${emergencyContacts.length + 1}`]);
    };

    const handleSave = () => {
        router.push('/home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Complete Your Profile</Text>

            <Button mode="contained" onPress={handleAddMedicalRecord} style={styles.button}>
                Upload Medical Record
            </Button>
            <View style={styles.itemsContainer}>

                {medicalRecords.length === 0 ? (
                    <Text style={styles.noDataText}>No Records</Text>
                ) : (
                    <FlatList
                        data={medicalRecords}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                        ItemSeparatorComponent={Divider}
                    />
                )}

            </View>


            <Button mode="contained" onPress={handleAddContact} style={styles.button}>
                Add Emergency Contact
            </Button>
            <View style={styles.itemsContainer}>

                {emergencyContacts.length === 0 ? (
                    <Text style={styles.noDataText}>No Contacts</Text>
                ) : (
                    <FlatList
                        data={emergencyContacts}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                        ItemSeparatorComponent={Divider}
                    />
                )}
            </View>
            <Button mode="contained" onPress={handleSave} style={styles.button}>
                Save & Go to Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        marginBottom: 10,
    },
    itemsContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#999',
        padding: 10,
        marginBottom: 15,
    },
    noDataText: {
        textAlign: 'center',
        color: '#6c757d',
    },
    listItem: {
        fontSize:14,
        padding: 8,
    }
});
