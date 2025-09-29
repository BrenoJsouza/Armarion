import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ImageBackground , KeyboardAvoidingView , Platform , ScrollView , StyleSheet ,
         Text , View , Alert } from 'react-native';

import Categoria from '../components/categoria';
import { LogoH } from '../components/logo';
import { Button3 } from '../components/button';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadUsername = async () => {
      const name = await AsyncStorage.getItem('username');
      if (name) setUsername(name);
    };
    loadUsername();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // ou removeItem('username') se quiser manter outros dados
      router.replace("/"); // redireciona para index.tsx
    } catch (error) {
      Alert.alert('Erro ao sair', 'Não foi possível limpar os dados.');
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/fundoDeHome.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.menu}>
        <LogoH />
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.name}>Bem-vindo, {username || 'visitante'}!</Text>
        </View>
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
          <Button3 onPress={handleLogout} />
        </ScrollView>
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "justify",
    color: "#000000ff",
  },
});
