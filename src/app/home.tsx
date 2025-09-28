import { useEffect, useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Categoria from '../components/categoria';
import { LogoH } from '../components/logo';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUsername = async () => {
      const name = await AsyncStorage.getItem('username');
      if (name) setUsername(name);
    };
    loadUsername();
  }, []);

  return (

    <ImageBackground
      source={require("../../assets/fundoDeHome.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.menu}>
        <LogoH />
        <Text style={styles.name}>Bem-vindo, {username || 'visitante'}!</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Categorias</Text>
          </View>
          <Categoria nome="Cereais." />
          <Categoria nome="Enlatados." />
          <Categoria nome="Carnes." />
          <Categoria nome="Frios." />
          <Categoria nome="Sobremesas." />
          <Categoria nome="Bebidas." />
          <Categoria nome="Lacticínios." />
          <Categoria nome="Produtos de Limpeza." />
          <Categoria nome="Bazar." />
          <Categoria nome="Lavanderia." />
          <Categoria nome="Higiene Pessoal." />

        </ScrollView >
      </KeyboardAvoidingView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  name: {
    color: "#1916ceda",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30
  },
  menu: {
    width: 260,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "justify",
    color: "#000000ff",
  }
})