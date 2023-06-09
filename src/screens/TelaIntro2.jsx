import { ImageBackground, Text, View } from "react-native";
import { intro } from "../lib/stylesIntro";
import Icon from "react-native-vector-icons/AntDesign";

export const TelaIntrodução2 = ({ navigation }) => {
  return (
    <View style={intro.fundo}>
      <ImageBackground
        source={require("../imagens/salaa.png")}
        style={intro.backgroundImage}
      >
        <Text style={intro.pular} onPress={() => navigation.navigate("Login")}>
          Pular
        </Text>

        <View style={intro.setas}>
          <Icon.Button
            style={intro.botico2}
            name="left"
            size={25}
            color="#6f7f76"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            onPress={() => navigation.navigate("Introducao")}
          ></Icon.Button>
          <Icon.Button
            style={intro.botico}
            name="right"
            size={25}
            color="#6f7f76"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            onPress={() => navigation.navigate("Introducao3")}
          ></Icon.Button>
        </View>
        <Text style={intro.TextIntro}>
          Nosso compromisso é oferecer móveis de alta qualidade que atendam às
          necessidades e preferências individuais de cada cliente.
        </Text>
      </ImageBackground>
    </View>
  );
};
