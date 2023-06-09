import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../lib/config";

export const TelaAjuda = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("Central")}
        >
          Central de Ajuda
        </Text>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("AjudaConta")}
        >
          Ajuda Com a Conta
        </Text>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("Sugestões")}
        >
          Sugestões
        </Text>
      </View>
    </ScrollView>
  );
};
