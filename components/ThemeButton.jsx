import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemeButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      {...props}
    />
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
