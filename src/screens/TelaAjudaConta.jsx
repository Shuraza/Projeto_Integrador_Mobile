
import { Image, Text, View } from "react-native"
import { ajudas } from "../lib/ajudas"
import {styles } from "../lib/styles"
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
export const TelaAjudaConta = ({ navigation }) => {
    return(
        <View style={ajudas.containerAjudaConta}>
              <Image style={ajudas.imgajudaconta} source={{ uri: require("../imagens/Escudo-i.png") }} />
              <Text style={ajudas.textoajudaconta}>O que Aconteceu?</Text>
       <Collapse>
    <CollapseHeader>
      <View>
        <Text style={ajudas.textoajudaconta2}>Entraram em minha conta.</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text>-Mude sua senha imediatamente.</Text>
      <Text>-Averigue seu email para alertas de login.</Text>
    </CollapseBody>
</Collapse>
<Collapse>
    <CollapseHeader>
      <View>
        <Text style={ajudas.textoajudaconta2}>Tentaram Roubar minha conta.</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text>-Mude sua senha imediatamente.</Text>
      <Text>-Averigue seu email para alertas de login.</Text>
    </CollapseBody>
</Collapse>
<Collapse>
    <CollapseHeader>
      <View>
        <Text style={ajudas.textoajudaconta2}>Esqueci minha senha.</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text>-Mude sua senha imediatamente.</Text>
      <Text>-Averigue seu email para alertas de login.</Text>
    </CollapseBody>
</Collapse>
        </View>
              
     
    )
}
{/* <Text style={ajudas.textoajudaconta}>O que Aconteceu?</Text>
<Text style={ajudas.textoajudaconta2}>Entraram em minha conta.</Text>
<Text style={ajudas.textoajudaconta2}>Tentaram roubar minha conta.</Text>
<Text style={ajudas.textoajudaconta2}>Esqueci minha senha.</Text> */}