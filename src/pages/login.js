import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,Image
} from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/input";
import AFLLogo from "../svgComponents/AFLLogo";
import { Amplify, Auth } from "aws-amplify";
import CheckSvg from '../../assets/check-square.svg'
import GoogleSvg from '../../assets/Google.svg'
import FacebookSvg from '../../assets/Facebook.svg'
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import awsconfig from "../aws-exports";
import { STRAPI_API_AUTH_TOKEN, STRAPI_API_ENDPOINT } from '../../ProjectConfig';
Amplify.configure(awsconfig);
//import "@aws-amplify/ui-react/styles.css";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(false);
  const register = () => {
    navigation.navigate("Register");
  };
  const handleLogin = async () => {
    try {
      setmsg("");
      setLoading(true);
      if (email != "" && password != "") {
        const res = await Auth.signIn({ username: email, password });
        if (res) {
          const authToken =STRAPI_API_AUTH_TOKEN;
          const apiEndpoint = STRAPI_API_ENDPOINT;

          try {
            const res = await fetch(apiEndpoint + "news-letters", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
              cache: "no-store",
              // next: { revalidate: 0 } ,
            });

            const response = await res.json();

            setLoading(false);
            
            if (
              response.data.find((item) =>
                item.attributes.Subscribers.includes(email.toLowerCase())
              )
            )
              navigation.navigate("Home");
            else navigation.navigate("Subscribe");
          } catch (error) {
            // Handle the error here or rethrow it as needed
            console.error("An error occurred while fetching data:", error);
            setLoading(false);

            throw error; // You can rethrow the error to handle it in the calling code
          }
        }

        //  navigation.navigate("Home");
      } else {
        alert("Please fill all Fields");
        setLoading(false);
      }
    } catch (error) {
      setmsg(error.message);
      console.error("Error signing in:", error);
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: '10%', backgroundColor: '#ffffff' }} >
      <View style={styles.buttonHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/back.png")} /></TouchableOpacity>
      </View>
    <View style={styles.container}>
      <AFLLogo />

      <InputField
        setValue={setEmail}
        value={email}
        placeholder={"Email"}
        Label={"Email"}
      />
      <InputField
        setValue={setPassword}
        value={password}
        placeholder={"*********"}
        Label={"Password"}
      />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
       
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={{color:'#002D62'}}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Roboto-Bold",
          color: "red",
          width: "100%",
          alignSelf: "center",
        }}>
        {msg}
      </Text>
      {loading ? (
        <ActivityIndicator size="small" color="#002D62" />
      ) : (
        <Button
          onPress={() => {
            handleLogin();
          }}
          Label={"LOGIN"}
        />
      )}
      
      <Text style={styles.bluetext}>
        Don't have an account? 
        <Text
          onPress={register}
          style={([styles.bluetext], { color: "#002D62", fontWeight: "500" })}>
           {" "}Register
        </Text>
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonHeader: {
    height: '5%',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop:10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "#FFFFFF",
    paddingHorizontal: 22,
    paddingVertical:'10%',
    justifyContent: "center",
    gap: 20,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  bluetext: {
    fontSize: 14,
    color:'#000000'
  },
  policytext: {
    fontSize: 12,
    fontWeight: "500",
    width: "64%",
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#fff", // Set the text color to white (#fff)
    textAlign: "center",
    fontWeight: "500", // Add some space between the image and the text
  },
  Button: {
    
    flexDirection: "row",
    width: "50%",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 5,
  },
});
