import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,Image
} from "react-native";
export default function Button({ Label, onPress, color = "#002D62" }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.Button, { backgroundColor: color }]}>
        {Label.includes("DELETE ACCOUNT") && <Image source={require('../../assets/warning.png')} />
        }
        <Text style={styles.buttontext}>{Label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  Button: {
    width: "100%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
    gap:10
  },
  buttontext: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Roboto-Bold",
  }
});
