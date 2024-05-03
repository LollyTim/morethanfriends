import React from "react";
import FeedScreen from "../screens/FeedScreen";
import { NativeScreenContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "../screens/CreatePostScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import FontAwesome from "@expo/vector-icons";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  //   const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
        <Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
