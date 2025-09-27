import React, { useState } from "react";
import { StyleSheet, View , Text , TextInput, KeyboardAvoidingView , Platform , ScrollView, 
        ImageBackground , SafeAreaView , Image } from "react-native";
import { Button1, Button2 } from "../components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./home";

export default function LoginScreen() {
  const [inputName, setInputName] = useState("");
  const saveUsername = async (username) => {
  try {
    await AsyncStorage.setItem("username", username);
  } catch (e) {
    console.log("Erro ao salvar nome:", e);
  }
};

const getUsername = async () => {
  try {
    const name = await AsyncStorage.getItem("username");
    return name;
  } catch (e) {
    console.log("Erro ao carregar nome:", e);
    return null;
  }
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
            <Image source={require("../../assets/logo-armarionB.png")} style={styles.logo}/>
            <View>
                
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Esse app tem como foco em aumentar a eficiencia da ida até o mercado.</Text>
                <Text style={styles.subtitle}>Evitando que você acabe comprando algo que ja tinha e/ou esquecendo de comprar algo que realmente precisava.</Text>
            </View> 

            <Text style={styles.title}>Usuário</Text>

            <Text style={styles.label}>Como gostaria de ser chamada(o):</Text>
            <TextInput
              style={styles.input}
              value={inputName}
              onChangeText={setInputName}
              autoCapitalize="none"
              returnKeyType="next"
              accessibilityLabel="Nome de usuário"
            />

              <Button1  onPress={() => {
                if (!inputName.trim()) {
                    alert("Digite um nome antes de continuar!");
                    return;}
                saveUsername(inputName); 
                navigation.navigate("Home");}}/>
           
          
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
  input: {
    width: "90%",
    height: 52,
    backgroundColor: "#f9f9f9", 
    borderWidth: 2,             
    borderColor: "#333",        
    borderRadius: 16,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
  },
  subtitle: {
        color: "#F28C38",     
        fontSize: 18,
        paddingBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
  },
  logo: {
  width: 140,
  height: 140,
  resizeMode: "contain",
  alignSelf: "center",
  },
});
