import { StyleSheet } from "react-native";

// theme component
import Spacer from "../../components/Spacer";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";

export default function Books() {
  return (
    <ThemeView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>
      <Spacer />
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
