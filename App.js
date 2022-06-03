import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from "./StackNavigator";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <StackNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </TailwindProvider>
  );
}
