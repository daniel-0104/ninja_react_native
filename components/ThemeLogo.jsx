import { Image, useColorScheme } from "react-native";
import DarkLogo from "../assets/img/nano-dark.png";
import LightLogo from "../assets/img/nano-light.png";

export default function ThemeLogo({ ...props }) {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
}
