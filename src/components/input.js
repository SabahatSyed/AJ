import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import EyeOff from "../svgComponents/eye-off"
export default function InputField({ Label = "", placeholder, setValue, value,editable=true }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{Label}</Text>
      <View style={styles.Input}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"grey"}
          cursorColor={'#3F5065'}
          value={value}
          editable={editable}
          onChangeText={(e) => setValue(e)}
          placeholder={placeholder}
          secureTextEntry={
            (Label == "Password" || Label == "Confirm Password") && (!showPassword)
          }
        />
        {(Label == "Password" || Label == "Confirm Password") && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <EyeOff />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    alignItems: "",
    justifyContent: "flex-start",
  },
  Input: {
    flexDirection: "row",
    backgroundColor: "#E4E7E9",
    width: "100%",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 3,
    padding:5
  },
  textInput: { 
    paddingVertical:10,
    paddingHorizontal:20,
    color: '#3F5065', 
    width: '100%', 
    position: 'relative' 
  },
  toggleButton: {
    position: 'absolute', right: 25
  },
  label: {
    fontSize: 12,
    color: "#000", // Set the text color to white (#fff)
    fontWeight: "bold", // Add some space between the image and the text
  },
});
