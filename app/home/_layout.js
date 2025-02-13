import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Icon, IconButton } from 'react-native-paper';

export default function HomeLayout() {
    return <View style={styles.container}>
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarStyle: { height: 58 },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Icon size={28} source="home" color={color} />,
                }} account-circle
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <Icon size={28} source="account-circle" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => <Icon size={28} source="history" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Icon size={28} source="cog" color={color} />,
                }}
            />
        </Tabs>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
});
