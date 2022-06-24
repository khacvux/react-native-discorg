import { View, Text } from "../Themed";
import { TouchableOpacity, View as DefaultView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { MonoText } from "../StyledText";

const StreamChat = ({navigation}) => {
  return (
    <TouchableOpacity
        activeOpacity={.7}
        onPress={() => navigation.navigate('Chatbox')}
    >
      <View
        style={tw`flex flex-row my-1 py-2 px-3 items-center mx-2 rounded`}
        darkColor='#42464D'
      >
        <Ionicons name="md-at" size={20} color="#898D92" />
        <Text style={tw`ml-2 text font-light`}>Stream name</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StreamChat;
