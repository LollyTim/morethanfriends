import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeImage from "./assets/images/like.png";

const post = {
  id: "p1",
  createdAt: "15 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Sanya Ololade",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* header */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subTitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="black"
            style={styles.icon}
          />
        </View>

        {/* body */}
        {post.description && (
          <Text style={styles.desctiption}>{post.description}</Text>
        )}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}

        {/* footer */}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeImages} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>
          <View style={styles.btnsRow}>
            <View style={styles.iconBtn}>
              <AntDesign name="like2" size={15} color="gray" />
              <Text style={styles.iconBtnText}>Like</Text>
            </View>

            <View style={styles.iconBtn}>
              <EvilIcons name="comment" size={24} color="black" />
              <Text style={styles.iconBtnText}>Share</Text>
            </View>

            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="black"
              />
              <Text style={styles.iconBtnText}>Share</Text>
            </View>
          </View>
        </View>
      </View>

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
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    alignItems: "center",
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subTitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  desctiption: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },

  postImage: {
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
    aspectRatio: 1,
    width: "100%",
  },
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    alignItems: "center",
  },
  likeImages: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  numOfShares: {},
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  btnsRow: {
    marginVertical: 10,
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    width: 100,
    borderRadius: 10,
  },
  iconBtnText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: 500,
  },
});
