import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemeView from "../components/ThemeView";
import ThemeLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";

export default function Home() {
  return (
    <ThemeView style={styles.container}>
      <ThemeLogo style={styles.img} />
      <ThemeText style={styles.title}>This is home page.</ThemeText>

      <Spacer />

      <Link href="/about" style={styles.link}>
        <ThemeText>About Page</ThemeText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemeText>Contact Page</ThemeText>
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
  img: {
    marginBottom: 30,
    width: 220,
    height: 100,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
