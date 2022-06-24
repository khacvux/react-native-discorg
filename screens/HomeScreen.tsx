import { View, Text, SafeAreaView } from "../components/Themed";
import tw from "twrnc";
import { FlatList, View as DefaultView, TouchableOpacity } from "react-native";
import RoomChat from "../components/RoomChat";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import StreamChat from "../components/StreamChat";
import Navigation from "../navigation";
import { MonoText } from "../components/StyledText";

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      name: "asdasd",
    },
    {
      name: "asdasd",
    },
    {
      name: "asdasd",
    },
  ];

  return (
    <SafeAreaView>
      <View style={tw`flex flex-row w-full h-full`}>
        <View style={[tw``, { width: 80 }]}>
          <FlatList
            data={data}
            renderItem={() => <RoomChat />}
            contentContainerStyle={tw`pt-3 w-full`}
            ListHeaderComponent={() => (
              <View style={tw`items-center`}>
                <TouchableOpacity style={tw`w-full items-center relative`}>
                  <View
                    style={[
                      tw`absolute top-1 bottom-1 left-0 rounded-r-xl`,
                      { width: 5 },
                    ]}
                    darkColor="#FEFEFE"
                  />
                  <View
                    style={[
                      { width: 50, height: 50 },
                      tw`items-center justify-center rounded-2xl`,
                    ]}
                    darkColor="#2E3136"
                  >
                    <Ionicons name="chatbox-sharp" size={25} color="#B8BABD" />
                  </View>
                </TouchableOpacity>
                <View
                  style={[tw`my-3 w-7/10`, { height: 1 }]}
                  lightColor="#eee"
                  darkColor="rgba(255,255,255,0.1)"
                />
              </View>
            )}
            ListFooterComponent={() => (
              <TouchableOpacity style={tw`w-full items-center my-3`}>
                <View
                  style={[
                    { width: 50, height: 50 },
                    tw`rounded-full items-center justify-center`,
                  ]}
                  darkColor="#2E3136"
                >
                  <AntDesign name="plus" size={25} color="#48A15C" />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={tw`flex-1 rounded-t-lg mr-3 pt-5`} darkColor="#2E3136">
          <DefaultView
            style={tw`flex flex-row items-center justify-between px-5 mb-3`}
          >
            <Text style={tw`text-xl font-semibold`}>Roomname</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Entypo name="dots-three-horizontal" size={20} color="#B9BBBE" />
            </TouchableOpacity>
          </DefaultView>
          <FlatList
            data={data}
            renderItem={() => <StreamChat navigation={navigation} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={tw`mx-5 my-2 rounded overflow-hidden mb-2`}>
                <TouchableOpacity>
                  <View
                    style={tw`flex flex-row items-center justify-center py-3`}
                    darkColor='#4F535C'
                  >
                    <AntDesign name="adduser" color='#fff' size={17} style={tw`mr-1`} />
                    <MonoText>Invite</MonoText>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
