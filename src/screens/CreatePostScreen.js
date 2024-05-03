import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const onSubmit = () => {
    console.warn("Button Pressed", description);
    setDescription("");

    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    // setImage(result.uri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("image state:", image);
    }
    console.log(image);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { marginBottom: 5 }]}
        contentContainerStyle={{ flex: 1 }}
      >
        <Text>Create Post Screen</Text>
        <View style={styles.header}>
          <Image style={styles.progileImage} source={{ uri: user.image }} />
          <Text style={styles.name}>{user.name}</Text>

          <Entypo
            onPress={pickImage}
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="What is on your mind"
          multiline
        />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.buttonContainer}>
          <Button title="Post" onPress={onSubmit} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
  input: {},
  buttonContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
});

export default CreatePostScreen;
