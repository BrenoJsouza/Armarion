import React, { useEffect, useState } from "react";
import {
  StyleSheet, View, Text, KeyboardAvoidingView, Platform, ScrollView,
  ImageBackground, SafeAreaView } from "react-native";

import { Input } from "../components/input";
import { Button1 } from "../components/button";
import { LogoL } from "../components/Logo";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';

const saveUsername = async (username: string) => {
  try {
    await AsyncStorage.setItem("username", username);
  } catch (e) {
    console.log("Erro ao salvar nome:", e);
  }
};

export default function LoginScreen() {
  const [inputName, setInputName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkUsername = async () => {
      const savedName = await AsyncStorage.getItem("username");
      if (savedName) {
        router.replace("/home"); // ignora login se já tiver nome
      }
    };
    checkUsername();
  }, [router]);

  const handleLogin = async () => {
    if (!inputName.trim()) {
      alert("Digite um nome!");
      return;
    }
    await saveUsername(inputName);
    router.push("/home");
  };



  return (
    <ImageBackground
      source={require("../../assets/fundoDeLogin.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <LogoL />
            <View>
              <Text style={styles.title}>Bem Vindo!</Text>
              <Text style={styles.subtitle}>Esse app tem como foco em aumentar a eficiencia da ida até o mercado.</Text>
              <Text style={styles.subtitle}>Evitando que você acabe comprando algo que ja tinha e/ou esquecendo de comprar algo que realmente precisava.</Text>
            </View>

            <Text style={styles.title}>Usuário</Text>

            <Text style={styles.label}>Como gostaria de ser chamada(o):</Text>
            <Input
              value={inputName}
              onChangeText={setInputName}
              autoCapitalize="none"
              returnKeyType="next"
              accessibilityLabel="Nome de usuário"
            />
            <Button1 onPress={handleLogin} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#e0c423ff",
  },
  label: {
    width: "90%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
    color: "#FFF"
  },
  subtitle: {
    color: "#F28C38",
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
