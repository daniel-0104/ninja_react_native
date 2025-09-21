import ThemeView from "../../components/ThemeView";
import ThemeLogo from "../../components/ThemeLogo";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Login to your account
      </ThemeText>

      <Spacer height={100} />
      <Link href="/register">
        <ThemeText style={{ textAlign: "center" }}>Register Instead</ThemeText>
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
});
