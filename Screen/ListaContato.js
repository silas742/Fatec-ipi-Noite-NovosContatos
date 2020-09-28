import React from "react";

import { View, StyleSheet, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaoCabecalho from "../components/Cabecalho";

const ListaDeContato = (props) => {
  return (
    <View>
      <Text>ListaDeContato</Text>
    </View>
  );
};

ListaDeContatoTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de Contatos",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={Cabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
        />
      </HeaderButtons>
    ),
  };
};

export default ListaDeContato;
