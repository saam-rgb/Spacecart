import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { CartContext } from "../CartContext";
import { auth } from "../firebase";

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          Cart ({getItemsCount()})
        </Text>
      </View>
      <View>
        <Text onPress={handleSignOut}>Logout</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "red",
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    height: 24,
  },
});
