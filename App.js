import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { EvilIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import LikeImage from "./assets/images/like.png";
import FeedPost from "./src/components/FeedPost";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPost />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "200px",
  },
});
