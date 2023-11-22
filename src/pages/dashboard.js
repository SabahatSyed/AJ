import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useState, useEffect } from "react";
import Hawks from "../svgComponents/hawks";
import P from "../svgComponents/p";
import Outlaws from "../svgComponents/outlaws";
import Firebirds from "../svgComponents/firebird";
import { useNavigation } from "@react-navigation/native";
import ArrowRight from '../../assets/UnionBlue.svg'
import HomeHeader from "../components/HomeHeader";
import { STRAPI_API_AUTH_TOKEN, STRAPI_API_ENDPOINT } from '../../ProjectConfig';

const matches = [
  {
    team1: { icon: <Hawks />, name: "WT", score: 40 },
    team2icon: { icon: <Outlaws />, name: "MT", score: 35 },
    status: "MON 5:15PM",
  },
  {
    team1: { icon: <P />, name: "FL", score: 40 },
    team2icon: { icon: <Outlaws />, name: "MT", score: 35 },
    status: "FINAL",
  },
  {
    team1: { icon: <Firebirds />, name: "WT", score: 40 },
    team2icon: { icon: <P />, name: "FL", score: 35 },
    status: "FINAL",
  },
  {
    team1: { icon: <Hawks />, name: "WT", score: 40 },
    team2icon: { icon: <Outlaws />, name: "MT", score: 35 },
    status: "MON 5:15PM",
  },
];

export default function Dashboard() {
  const navigation = useNavigation();
  const [newslist, setnews] = useState();
  const [statslist, setstats] = useState();
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function fetchApi() {
      const authToken =STRAPI_API_AUTH_TOKEN;
      const apiEndpoint = STRAPI_API_ENDPOINT;

      async function getData() {
        try {
          setLoading(true)
          const data = await fetch(apiEndpoint + "newss", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            cache: "no-store",
            // next: { revalidate: 0 } ,
          });
          const response = await data.json();
          setnews(response.data);
          setLoading(false)
          return response;
        } catch (error) {
          // Handle the error here or rethrow it as needed
          console.error("An error occurred while fetching data:", error);
          setLoading(false)
          throw error; // You can rethrow the error to handle it in the calling code
        }
      }
      async function getStatsData() {
        try {
          const res = await fetch(apiEndpoint + "stats?populate=icon", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            cache: "no-store",
            // next: { revalidate: 0 } ,
          });
          const response = await res.json();
          setstats(response.data);
          return response;
        } catch (error) {
          // Handle the error here or rethrow it as needed
          console.error("An error occurred while fetching data:", error);
          throw error; // You can rethrow the error to handle it in the calling code
        }
      }
      const data = getData();
      const res = getStatsData();
    }
    fetchApi()
  }, [])

  // useEffect(async () => {
  //   const authToken =
  //   const apiEndpoint = ;

  //   async function getData() {
  //     try {
  //       const data = await fetch(apiEndpoint + "newss", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //         cache: "no-store",
  //         // next: { revalidate: 0 } ,
  //       });
  //       const response = await data.json();
  //       setnews(response.data);
  //       return response;
  //     } catch (error) {
  //       // Handle the error here or rethrow it as needed
  //       console.error("An error occurred while fetching data:", error);
  //       throw error; // You can rethrow the error to handle it in the calling code
  //     }
  //   }
  //   async function getStatsData() {
  //     try {
  //       const res = await fetch(apiEndpoint + "stats?populate=icon", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //         cache: "no-store",
  //         // next: { revalidate: 0 } ,
  //       });
  //       const response = await res.json();
  //       setstats(response.data);
  //       return response;
  //     } catch (error) {
  //       // Handle the error here or rethrow it as needed
  //       console.error("An error occurred while fetching data:", error);
  //       throw error; // You can rethrow the error to handle it in the calling code
  //     }
  //   }
  //   const data = getData();
  //   const res = getStatsData();
  // }, []);
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 30, backgroundColor: 'white'}}>
      <HomeHeader/>
      <View
        style={{ width: "100%", backgroundColor: "white" }}>
        <TouchableOpacity style={{ display: "flex", alignItems: 'center', }} onPress={() => navigation.navigate('Tickets')}>
          <Image style={{ width: '92%' }} source={require("../../assets/aflbanner.png")} />
        </TouchableOpacity>

        <View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text
              style={{
                fontFamily: "Magistral-Bold",
                fontSize: 14,
                color: "#002D62",
                marginHorizontal: 24,
                marginVertical: 30,
              }}>
              UPCOMING SCHEDULE
            </Text>
          </View>

          {/* <ScrollView
            style={{
              flexDirection: "row",
              width: "100%",
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 30,
                marginHorizontal: 20,
              }}>
              {matches.map((item) => (
                <View
                  key={3}
                  style={{ alignItems: "center", justifyContent: "center" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 4,
                      gap: 17,
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}>
                      {item.team1.icon}
                      <Text
                        style={{ fontFamily: "Roboto-Regular", fontSize: 12 }}>
                        {item.team1.name}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: "Roboto-Bold",
                        fontSize: 12,
                        color: "#555555",
                      }}>
                      {item.team1.score}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 17,
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}>
                      {item.team1.icon}
                      <Text
                        style={{ fontFamily: "Roboto-Regular", fontSize: 12 }}>
                        {item.team1.name}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: "Roboto-Bold",
                        fontSize: 12,
                        color: "#555555",
                      }}>
                      {item.team1.score}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 12,
                      marginTop: 5,
                      color: "#555555",
                    }}>
                    {item.status}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView> */}
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleContainerText}>
              Schedule to be announced...</Text>
          </View>
        </View>
      </View>
      {/* <ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor:'#EEEEEE',
            marginTop:10
          }}>
          <Text
            style={{
              fontFamily: "Magistral-Bold",
              fontSize: 14,
              color: "#002D62",
              marginHorizontal: 24,
              marginVertical: 40,
            }}>
            NEWS
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              marginRight: 13,
            }}>
            <Text
              onPress={() => navigation.navigate("News")}
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 14,
                color: "#002D62",
              }}>
              View All
            </Text>
             <SvgUri source={require("../../assets/UnionBlue.svg")} />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              gap: 20,
            }}>
            {newslist?.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  width: "18.55%",
                  borderRadius: 6,
                  maxWidth: 127,
                  minWidth: 127,
                  minHeight: 167,
                  maxHeight: 167,
                  flexDirection: "column",
                }}>
                <Image
                  source={{
                    uri: item.attributes.image_url,
                  }}
                  style={{ width: 127, height: 80.27 }}
                />

                <View style={{ padding: 10 }}>
                  <Text
                    style={{ fontFamily: "Roboto-Bold", fontSize: 9 }}
                    numberOfLines={3}>
                    {item.attributes.title}
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 8,
                      color: "gray",
                    }}>
                    {item.attributes.description}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 5,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        fontFamily: "Roboto-Bold",
                        fontSize: 7,
                        color: "#002D62",
                      }}>
                      Keep Reading
                    </Text>
                    <SvgUri
                      source={require("../../assets/UnionBluesmol.svg")}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        
      </ScrollView> */}

      <ScrollView contentContainerStyle={{backgroundColor: '#EEEEEE', marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor:"#EEEEEE"
          }}>
          <Text
            style={{
              fontFamily: "Magistral-Bold",
              fontSize: 14,
              color: "#002D62",
              marginHorizontal: 24,
              marginVertical: 40,
            }}>
            LATEST NEWS
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              marginRight: 13,
              paddingVertical: 15,
            }}>
            <Text
              onPress={() => navigation.navigate("News")}
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 14,
                color: "#2C2C2C",
                paddingVertical: 15,
              }}>
              View All
            </Text>
            <ArrowRight 
              width={14} height={14} />
          </View>
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          {
            loading ? (
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'#EEEEEE' }}>
                <ActivityIndicator size="large" color="#002D62" />
              </View>
            ) : (
              <View
                style={{
                  marginLeft: 15,
                  gap: 20,
                }}>
                {newslist?.slice(0, 3).map((item, index) => (
                  <View key={index}>
                    <View
                      style={{
                        width: "100%",
                        borderRadius: 6,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        minWidth: 346,
                        maxWidth: 346,
                        maxHeight: 120,
                        minHeight: 120,
                      }}>
                      <View style={{ padding: 10, gap: 5 }}>
                        <Text
                          numberOfLines={3}
                          style={{
                            fontFamily: "Roboto-Bold",
                            fontSize: 12,
                            width: 202,
                            color: '#000000',
                          }}>
                          {item.attributes.title}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 9.5,
                            color: "#000000",
                            width: 202,
                          }}
                          numberOfLines={3}>
                          {item.attributes.description}
                        </Text>

                        <TouchableOpacity
                        onPress={() => navigation.navigate("News Details",{
                          data:item,
                         })}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            paddingVertical: 10
                          }}>
                          <Text
                            // onPress={() => navigation.navigate("Teams")}
                            style={{
                              fontFamily: "Roboto-Bold",
                              fontSize: 10,
                              color: "#002D62",
                              paddingVertical: 8
                            }}>
                            Keep Reading
                          </Text>
                          <ArrowRight width={8} height={8} />
                        </TouchableOpacity>
                      </View>
                      <Image
                        source={{ uri: item.attributes.image_url }}
                        style={{ width: 140, height: 110, borderRadius: 15 }}
                      />
                    </View>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(0, 0, 0, 0.1)",
                        marginHorizontal:'auto',
                        width: "95%",
                      }}
                    />
                  </View>
                ))}
              </View>
            )
          }

        </ScrollView>
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fonttext: {
    fontFamily: "Magistral-Bold",
  },
  homeBanner: {
    position: "relative",
    alignSelf: "center",
  },
  scheduleContainer: {
    width: '90%',
    marginHorizontal: 20,
    marginTop: -10,
    height: 120,
    backgroundColor: '#D9D9D9',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  scheduleContainerText: {
    fontSize: 14,
    color: '#777777',
    fontWeight: '500',
  }
});
