import ThemeView from "../../components/ThemeView";
import ThemeLogo from "../../components/ThemeLogo";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemeButton from "../../components/ThemeButton";

export default function Login() {
  const pressHandler = () => {
    console.log("login form submitted");
  };
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Login to your account
      </ThemeText>

      <Spacer />
      <ThemeButton onPress={pressHandler}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemeButton>

      <Spacer height={40} />
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
