import { StyleSheet } from "react-native";

// theme component
import Spacer from "../../components/Spacer";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";

export default function Profile() {
  return (
    <ThemeView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        Your Email
      </ThemeText>
      <Spacer />
      <ThemeText>Time to read some books...</ThemeText>
      <Spacer />
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
