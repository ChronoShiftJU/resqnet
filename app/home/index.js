import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Appbar, Card, Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="ResQNet" />
      </Appbar.Header>

      <TouchableOpacity style={styles.sosButton} onPress={() => router.push('/sos/self')}>
        <Card style={styles.sosCard}>
          <Card.Title
            title="SOS Self"
            left={(props) => <Avatar.Icon {...props} icon="account-alert" />}
          />
          <Card.Content>
            <Text style={styles.sosText}>Activate SOS for Self</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <Card style={styles.card}>
        <Card.Title
          title="SOS Others"
          left={(props) => <Avatar.Icon {...props} icon="account-group" />}
        />
        <Card.Content>
          <Button mode="outlined" onPress={() => router.push('/sos/others')} style={styles.button}>
            Help Someone Else
          </Button>
        </Card.Content>
      </Card>

      {/* <Text style={styles.status}>Status: All Systems Normal</Text> */}

      <Appbar style={styles.bottomNav}>
        <Appbar.Action icon="home" onPress={() => router.push('/home')} />
        <Appbar.Action icon="account" onPress={() => router.push('/profile')} />
        <Appbar.Action icon="history" onPress={() => router.push('/history')} />
        <Appbar.Action icon="cog" onPress={() => router.push('/settings')} />
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    // backgroundColor: 'grey',
  },
  sosButton: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sosCard: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff4d4d',
  },
  sosText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    flex:1,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
  },
  status: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#6c757d',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
  },
});
