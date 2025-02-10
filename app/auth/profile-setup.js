import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileSetupScreen() {
  const router = useRouter();
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const handleAddMedicalRecord = () => {
    // Logic to upload medical record
    setMedicalRecords([...medicalRecords, 'New Medical Record']);
  };

  const handleAddContact = () => {
    // Logic to add emergency contact
    setEmergencyContacts([...emergencyContacts, 'New Contact']);
  };

  const handleSave = () => {
    // Save profile setup and navigate to Home
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>

      <Text style={styles.sectionTitle}>Medical Records</Text>
      <Button title="Upload Medical Record" onPress={handleAddMedicalRecord} />
      {medicalRecords.length === 0 ? (
        <Text style={styles.noDataText}>No Records</Text>
      ) : (
        <FlatList
          data={medicalRecords}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}

      <Text style={styles.sectionTitle}>Emergency Contacts</Text>
      <Button title="Add Contact" onPress={handleAddContact} />
      {emergencyContacts.length === 0 ? (
        <Text style={styles.noDataText}>No Contacts</Text>
      ) : (
        <FlatList
          data={emergencyContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}

      <Button title="Save & Go to Home" onPress={handleSave} style={styles.saveButton} />
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  noDataText: {
    color: '#6c757d',
    marginVertical: 5,
  },
  saveButton: {
    marginTop: 20,
  },
});
