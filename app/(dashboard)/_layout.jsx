import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
        },
        tabBarActiveTintColor: theme.iconColorFocus,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={18}
              name={focused ? "person" : "person-outline"}
              color={focused ? theme.iconColorFocus : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={18}
              name={focused ? "book" : "book-outline"}
              color={focused ? theme.iconColorFocus : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={18}
              name={focused ? "create" : "create-outline"}
              color={focused ? theme.iconColorFocus : theme.iconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({});
