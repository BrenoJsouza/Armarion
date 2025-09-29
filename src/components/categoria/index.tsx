import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, Alert,
  ScrollView, TouchableOpacityProps, Modal
} from 'react-native';
import { styles } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

type Item = {
  id: number;
  nome: string;
  quantidade: number;
};

type Props = {
  nome: string;
} & TouchableOpacityProps;

export default function Categoria({ nome, ...rest }: Props) {
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novaQtd, setNovaQtd] = useState('1');

  const storageKey = `@Categoria:${nome}`;

  useEffect(() => {
    const carregarDados = async () => {
      const dadosSalvos = await AsyncStorage.getItem(storageKey);
      if (dadosSalvos) {
        setItems(JSON.parse(dadosSalvos));
      }
    };
    carregarDados();
  }, [storageKey]);

  useEffect(() => {
    AsyncStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  const confirmarNovoItem = () => {
    const novoId = items.length + 1;
    const quantidade = parseInt(novaQtd) || 1;
    const novoItem = { id: novoId, nome: novoNome || `Item ${novoId}`, quantidade };

    setItems([...items, novoItem]);
    setModalVisible(false);
    setNovoNome('');
    setNovaQtd('1');

    Alert.alert('Item Adicionado', `Você adicionou "${novoItem.nome}" com quantidade ${quantidade}`);
  };

  const removerItem = (id: number) => {
    Alert.alert('Remover Item', `Deseja remover este item?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          const novaLista = items.filter((item) => item.id !== id);
          setItems(novaLista);
          Alert.alert('Item Removido', `Item removido com sucesso.`);
        },
      },
    ]);
  };

  const alterarQuantidade = (id: number, delta: number) => {
    const novaLista = items.map((item) =>
      item.id === id
        ? { ...item, quantidade: Math.max(0, item.quantidade + delta) }
        : item
    );
    setItems(novaLista);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.categoria}>
          <Text style={styles.titulo}>{nome}</Text>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.ButtonM}
            onPress={() => setModalVisible(true)}
            {...rest}
          >
            <Text style={styles.Text}> + </Text>
          </TouchableOpacity>
        </View>

        {items.map((item) => (
          <View key={item.id} style={[ styles.itemBox, 
                item.quantidade === 0 && { backgroundColor: '#fd1212ff' } ]}>

            <Text style={styles.itemNome}>{item.nome}</Text>

            <View style={styles.quantidadeBox}>
              <TouchableOpacity
                style={styles.qtdButton}
                onPress={() => alterarQuantidade(item.id, -1)}
              >
                <Text style={styles.qtdText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qtdValor}>{item.quantidade}</Text>

              <TouchableOpacity
                style={styles.qtdButton}
                onPress={() => alterarQuantidade(item.id, 1)}
              >
                <Text style={styles.qtdText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.ButtonR}
              onPress={() => removerItem(item.id)}
            >
              <Text style={{ color: 'white' }}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Modal para adicionar novo item */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Item</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Nome do item"
              value={novoNome}
              onChangeText={setNovoNome}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={novaQtd}
              onChangeText={setNovaQtd}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalConfirm}
                onPress={confirmarNovoItem}
              >
                <Text style={styles.modalText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
