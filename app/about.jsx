import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemeText from "../components/ThemeText";
import ThemeView from "../components/ThemeView";

export default function About() {
  return (
    <ThemeView style={styles.container}>
      <ThemeText style={styles.title}>About Page</ThemeText>

      <Link href="/" style={styles.link}>
        <ThemeText>Back Home</ThemeText>
      </Link>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
