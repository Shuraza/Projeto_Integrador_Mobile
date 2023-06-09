import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import { principas } from "../lib/principas";
import { TelaConfigura } from "./TelaConfigura";
import { TelaCarrinho } from "./TelaCarrinho";
import Carousel from "react-native-reanimated-carousel";
import { ScrollView } from "react-native";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import Skeleton from "../lib/skeleton";

const Tabs = AnimatedTabBarNavigator();
export function TabsNav() {
  return (
    <Tabs.Navigator
      appearance={{
        floating: true,
        tabBarBackground: "#34271F",
        dotSize: "small",
        whenActiveShow: "icon-only",
      }}
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: "#45352b",
      }}
    >
      <Tabs.Screen
        name="Principal"
        component={TelaPrincipal2}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon3
              name="ios-home"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Carrinho"
        component={TelaCarrinho}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon2
              name="shopping-cart"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Configuração"
        component={TelaConfigura}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon2
              name="settings"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export const TelaPrincipal = ({}) => {
  return <TabsNav />;
};

const images = [
  require("../imagens/saladeestar.jpg"),
  require("../imagens/cozinha.jpg"),
  require("../imagens/quarto.jpg"),
];

const TelaPrincipal2 = ({}) => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    getDocs(collection(db, "Produtos")).then((querySnapshot) => {
      const produtos = [];
      querySnapshot.forEach((doc) => {
        const {
          Nome: Nome,
          Descricao: Descricao,
          Altura: Altura,
          Imagem: Imagem,
          Largura: Largura,
          Material: Material,
          Preço: Preço,
          Profundidade: Profundidade,
        } = doc.data();
        produtos.push({
          id: doc.id,
          Nome,
          Descricao,
          Altura,
          Imagem,
          Largura,
          Material,
          Preço,
          Profundidade,
        });
      });
      setProdutos(produtos);
      console.log(produtos);
    });
  }, []);

  return (
    <ScrollView>
      <View style={principas.tela}>
        <View style={principas.carrosa}>
          <Carousel
            style={principas.carrosa2}
            loop
            width={185 * 2}
            height={350 / 2}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  borderRadius: 30,
                }}
              >
                <Image style={principas.image} source={item} />
              </View>
            )}
          />
        </View>

        <View style={principas.circulosfora}>
          <View>
            <View style={[principas.circulos, principas.shadowProp]}>
              <Icon3.Button
                style={principas.iconebotao}
                name="bed-outline"
                backgroundColor={"rgba(0, 0, 0, 0.0)"}
                color={"#695548"}
                on-background={"none"}
                size={30}
                onPress={() => navigation.navigate("Dormitorio")}
              />
            </View>
            <View>
              <Text style={principas.minitexto}>Quarto</Text>
            </View>
          </View>

          <View>
            <View style={[principas.circulos, principas.shadowProp]}>
              <Icon4.Button
                style={principas.iconebotao}
                name="sofa-outline"
                backgroundColor={"rgba(0, 0, 0, 0.0)"}
                color={"#695548"}
                size={30}
                onPress={() => navigation.navigate("Sala")}
              />
            </View>
            <View>
              <Text style={principas.minitexto}>Sala</Text>
            </View>
          </View>

          <View>
            <View style={[principas.circulos, principas.shadowProp]}>
              <Icon.Button
                style={principas.iconebotao}
                name="kitchen"
                backgroundColor={"rgba(0, 0, 0, 0.0)"}
                color={"#695548"}
                size={30}
                onPress={() => navigation.navigate("Cozinha")}
              ></Icon.Button>
            </View>
            <View>
              <Text style={principas.minitexto}>Cozinha</Text>
            </View>
          </View>

          <View>
            <View style={[principas.circulos, principas.shadowProp]}>
              <Icon4.Button
                style={principas.iconebotao}
                name="image-frame"
                backgroundColor={"rgba(0, 0, 0, 0.0)"}
                color={"#695548"}
                size={30}
                onPress={() => navigation.navigate("Decoração")}
              ></Icon4.Button>
            </View>
            <View>
              <Text style={principas.minitexto}>Aparatos</Text>
            </View>
          </View>
        </View>

        <Skeleton visible={loading}>
          <View style={principas.containerboxsSkeleton}>
            {produtos.map((produto) => (
              <Pressable
                key={produto.id}
                onPress={() =>
                  navigation.navigate("PreCompra", { idCompra: produto.id })
                }
              >
                <View style={principas.boxs}>
                  <View style={principas.imgbox1}>
                    <Image
                      style={principas.imgbox}
                      source={{ uri: produto.Imagem }}
                    ></Image>
                  </View>

                  <Text style={principas.boxstext}>{produto.Nome}</Text>
                  <Text style={principas.boxstext1}>{produto.Preço}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </Skeleton>
        <Skeleton visible={loading}></Skeleton>
        <Skeleton visible={loading}></Skeleton>
        <Skeleton visible={loading}></Skeleton>
      </View>
    </ScrollView>
  );
};
