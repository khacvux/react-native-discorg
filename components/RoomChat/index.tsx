import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";

const RoomChat = () => {
  return (
    <TouchableOpacity style={tw`w-full items-center relative my-1`}>
      <View
        style={[tw`absolute top-1 bottom-1 left-0 rounded-r-xl`, { width: 5 }]}
        darkColor='#FEFEFE'
      />
      <ImageBackground
        source={require("../../assets/images/icon.png")}
        style={[{ width: 50, height: 50 }, tw`rounded-2xl overflow-hidden`]}
        // style={[{ width: 50, height: 50 }, tw`rounded-full overflow-hidden`]}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export default RoomChat;
