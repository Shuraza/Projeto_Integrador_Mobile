import { useState } from "react";
import { Image, View } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  Text,
  TextInput,
} from "react-native-paper";

import { styles } from "../lib/styles";

const images = require ("../imagens/esqueceuaSenha.png")

export const TelaEsqueceuaSenha = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imgS}
            source={images}
          />
        </View>

        <View style={styles.textos}>
          <Text style={styles.textoR}>Recupere sua senha:</Text>
          <View style={styles.inputd}>
          <TextInput placeholder="Digite seu email" style={styles.input}></TextInput>
          </View>
          <Text style={styles.textoS}>
            Será enviado um código sms ao número cadastrado.
          </Text>
        </View>

        <Button style={styles.btt} mode="contained" onPress={showDialog}>
          Enviar
        </Button>
      </View>
      <View>
        <Portal>
          <Dialog style={styles.alert} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Código enviado com sucesso!</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Continuar com o cadastro</Paragraph>
            </Dialog.Content>
            <Dialog.Actions style={styles.CO}>
              <Button onPress={() => navigation.navigate("TelaEnvioSms")}>
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};
